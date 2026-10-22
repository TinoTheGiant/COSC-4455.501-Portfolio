from flask import Flask, abort, redirect, render_template, request, url_for

app = Flask(__name__)


# ---------------------------------------------------------------------------
# Data passed from Flask to the templates (dynamic content)
# ---------------------------------------------------------------------------

# Basic profile information displayed on the home page.
PROFILE = {
    "name": "Tino Kaseke",
    "first_name": "Tino",
    "last_name": "Kaseke",
    "role": "Graduate Student · Systems Developer",
    "research_areas": ["Quantum networks", "AI", "Distributed Database Systems"],
    "intro": (
        "I am a graduate student and full-stack developer blending theoretical "
        "research with scalable software solutions. I build dynamic web "
        "applications using Python, C#, and modern JavaScript ecosystems, with a "
        "specialized focus on distributed systems and secure computer networking. "
        "Driven by deep technical curiosity, my work spans from Distributed "
        "Database Systems and secure DNS protocols to emerging frontiers like AI "
        "video architectures and quantum computing."
    ),
}

# Core skills shown on the home page. The template loops over this list
# with {% for skill in skills %} to build the skill badges.
SKILLS = [
    "Python",
    "Flask",
    "Django",
    "JavaScript",
    "React",
    "C#",
    "SQL",
    "PostgreSQL",
    "Docker",
    "Cisco Networking",
]

# (endpoint, label) pairs used to build the navbar in base.html.
# The endpoint is the name of the view function below, so url_for(endpoint)
# always produces the correct link.
NAV_LINKS = [
    ("index", "Home"),
    ("about", "About"),
    ("projects", "Projects"),
    ("contact", "Contact"),
    ("schedule", "Schedule"),
]


@app.context_processor
def inject_globals():
    """Make these variables available in EVERY template automatically."""
    return {"nav_links": NAV_LINKS, "owner_name": PROFILE["name"]}




@app.route("/")
def index():
    """Home page ("/")"""
    return render_template("index.html", profile=PROFILE, skills=SKILLS)


@app.route("/about")
def about():
    """About page ("/about") - bio, education, certifications and skills."""
    return render_template("about.html")


@app.route("/projects")
def projects():
    """Projects page ("/projects") - project cards and the GitHub modal."""
    return render_template("projects.html")


@app.route("/contact", methods=["GET", "POST"])
def contact():
    """Contact page ("/contact").

    GET  -> show the empty contact form.
    POST -> the form was submitted (the form uses method="POST" and
            action="/contact"), so read the fields from request.form and
            show a confirmation message on the same page below the form.
    """
    form_message = None  # text shown below the form (None = show nothing)
    form_status = None   # Bootstrap alert style: "success" or "danger"

    # Detect a form submission
    if request.method == "POST":
        # Read each field from the submitted form data
        fname = request.form.get("fname", "").strip()
        lname = request.form.get("lname", "").strip()
        email = request.form.get("email", "").strip()
        meet = request.form.get("meet", "")
        date = request.form.get("date", "").strip()
        message = request.form.get("message", "").strip()

        # Server-side check that the required fields were filled in.
        # (contact.js also checks this in the browser before submitting.)
        if all([fname, lname, email, date, message]):
            form_status = "success"
            form_message = (
                f"Thank you, {fname} {lname}! Your message has been received. "
                f"I'll get back to you at {email}."
            )

            print(f"[contact] {fname} {lname} <{email}> met_before={meet} "
                  f"date={date} message={message!r}")
        else:
            form_status = "danger"
            form_message = "Please fill out all required fields."

    
    return render_template(
        "contact.html", form_message=form_message, form_status=form_status
    )


@app.route("/schedule")
def schedule():
    """Schedule page ("/schedule") - class table and embedded video."""
    return render_template("schedule.html")


@app.route("/<page>.html")
def legacy_html(page):
    """Redirect old HW4 links like /about.html to the new Flask routes.

    Unknown pages return a 404 Not Found error.
    """
    if page not in dict(NAV_LINKS):
        abort(404)
    return redirect(url_for(page), code=301)


# Allows running the app with "python app.py" as well as "flask run".
if __name__ == "__main__":
    app.run(debug=True, port=8000)
