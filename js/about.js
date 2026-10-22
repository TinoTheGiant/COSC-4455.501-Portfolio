// array of skills display using javascript
document.addEventListener("DOMContentLoaded", function() {
    // 1. Create a JavaScript array
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Cisco Networking",
        "C++",
        "Python",
        "Django",
        "C#",
        "ASP.Net",
        "React",
        "NodeJS",
        "TypeScript",
        "SQL",
        "NextJS",
        "MongoDB",
        "PostgreSQL",
        "PHP",
        "Wordpress",
        "Git",
        "GitHub",
        "Docker",
        "GraphQL",
        "FastApi"
    ];

    // Get the unordered list element by its ID
    const skillsList = document.getElementById("skills-list");

    // Make sure the element exists on the page
    if (skillsList) {
        // 2. Use a loop (forEach) to display information from the array
        skills.forEach(function(skill) {
            // Create a new list item (li) for each skill
            const li = document.createElement("li");
            
            // Set the text of the list item to the current skill in the loop
            li.textContent = skill;
            
            // Add custom classes for styling
            li.className = "skill-item"; 
            
            // Append the new list item to the unordered list
            skillsList.appendChild(li);
        });
        
        // Add custom classes to the ul for grid layout
        skillsList.className = "skills-grid";
    }
});
