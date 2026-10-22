// contact form validation script
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const formMessages = document.getElementById("formMessages");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Get form fields
            const fname = document.getElementById("fname").value.trim();
            const lname = document.getElementById("lname").value.trim();
            const email = document.getElementById("email").value.trim();
            const date = document.getElementById("date").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check if required fields are empty
            if (fname === "" || lname === "" || email === "" || date === "" || message === "") {
                // Display error message
                formMessages.innerHTML = "<div class='alert alert-danger'>Please fill out all required fields.</div>";
            } else {
                // Display success message
                formMessages.innerHTML = "<div class='alert alert-success'>Thank you! Your message has been sent successfully.</div>";
                // Optional: reset the form
                form.reset();
            }
        });
    }
});
