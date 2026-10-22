// contact form validation script
// If a required field is empty, stop the submit and show an error.
// If everything is filled in, let the form POST to the Flask /contact route,
// which reads the data with request.form and shows the thank-you message.
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const formMessages = document.getElementById("formMessages");

    if (form) {
        form.addEventListener("submit", function(event) {
            // Get form fields
            const fname = document.getElementById("fname").value.trim();
            const lname = document.getElementById("lname").value.trim();
            const email = document.getElementById("email").value.trim();
            const date = document.getElementById("date").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check if required fields are empty
            if (fname === "" || lname === "" || email === "" || date === "" || message === "") {
                // Block the submission and display error message
                event.preventDefault();
                formMessages.innerHTML = "<div class='alert alert-danger'>Please fill out all required fields.</div>";
            }
            // Otherwise do nothing: the browser submits the form to Flask (POST /contact)
        });
    }
});
