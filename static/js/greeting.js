// Creates a greeting popup that appears when the page loads

document.addEventListener("DOMContentLoaded", function() {
    // Check if greeting has already been shown in this session
    if (sessionStorage.getItem("greetingShown")) {
        return; // Exit if already shown
    }

    // Determine time of day
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Create popup element
    const popup = document.createElement("div");
    popup.id = "greeting-popup";
    popup.innerHTML = `<strong>${greeting}</strong> Welcome to my portfolio.`;
    
    // Append to body
    document.body.appendChild(popup);

    // Trigger animation slightly after appending
    setTimeout(() => {
        popup.classList.add("show");
    }, 100);

    // Hide after 5 seconds
    setTimeout(() => {
        popup.classList.remove("show");
        // Remove from DOM after transition
        setTimeout(() => {
            popup.remove();
        }, 500);
    }, 5000);

    // Mark as shown for the current session
    sessionStorage.setItem("greetingShown", "true");
});
