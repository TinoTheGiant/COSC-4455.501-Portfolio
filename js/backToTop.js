//Creates a back to top button that appears when the page is scrolled down 200px

document.addEventListener("DOMContentLoaded", function() {
    // Create the button element
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerHTML = "&#8679;"; // Up arrow HTML entity
    backToTopBtn.id = "backToTopBtn";
    backToTopBtn.title = "Go to top";

    // Append it to the body
    document.body.appendChild(backToTopBtn);

    // Show button when scrolling down 200px from top
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "block";
           
            setTimeout(() => {
                backToTopBtn.style.opacity = "1";
            }, 10);
        } else {
            backToTopBtn.style.opacity = "0";
            
            setTimeout(() => {
                if (backToTopBtn.style.opacity === "0") {
                    backToTopBtn.style.display = "none";
                }
            }, 300); 
        }
    });

    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
