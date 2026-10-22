// array of skills display using javascript
// Skills are grouped into categories and rendered as a Bootstrap accordion.
// Icon IDs come from https://skillicons.dev; Cisco isn't offered there, so a
// matching local tile (static/images/cisco.svg) is used instead.
document.addEventListener("DOMContentLoaded", function() {
    // 1. Create a JavaScript array of skill categories
    const skillCategories = [
        {
            title: "Programming Languages",
            icons: [
                { id: "js", name: "JavaScript" },
                { id: "py", name: "Python" },
                { id: "ts", name: "TypeScript" },
                { id: "cs", name: "C#" },
                { id: "cpp", name: "C++" },
                { id: "php", name: "PHP" },
                { id: "html", name: "HTML5" },
                { id: "css", name: "CSS3" }
            ]
        },
        {
            title: "Libraries & Frameworks",
            icons: [
                { id: "bootstrap", name: "Bootstrap" },
                { id: "react", name: "React" },
                { id: "nextjs", name: "NextJS" },
                { id: "nodejs", name: "NodeJS" },
                { id: "django", name: "Django" },
                { id: "dotnet", name: "ASP.Net" },
                { id: "fastapi", name: "FastApi" },
                { id: "graphql", name: "GraphQL" }
            ]
        },
        {
            title: "Tools & Platforms",
            icons: [
                { id: "git", name: "Git" },
                { id: "github", name: "GitHub" },
                { id: "docker", name: "Docker" },
                { id: "mysql", name: "SQL" },
                { id: "mongodb", name: "MongoDB" },
                { id: "postgres", name: "PostgreSQL" },
                { id: "wordpress", name: "Wordpress" },
                { src: "/static/images/cisco.svg", name: "Cisco Networking" }
            ]
        },
        {
            title: "Soft Skills",
            list: [
                "Communication",
                "Problem Solving & Troubleshooting",
                "Customer Service",
                "Project Management",
                "Teamwork & Collaboration",
                "Adaptability",
                "Time Management"
            ]
        }
    ];

    // Get the accordion container by its ID
    const accordion = document.getElementById("skillsAccordion");

    // Make sure the element exists on the page
    if (!accordion) return;

    // 2. Use a loop (forEach) to build one accordion item per category
    skillCategories.forEach(function(category, index) {
        const headingId = "skillsHeading" + index;
        const collapseId = "skillsCollapse" + index;
        const isOpen = index === 0; // first category starts expanded

        const item = document.createElement("div");
        item.className = "accordion-item";

        // Header button toggles the collapse panel
        const header = document.createElement("h4");
        header.className = "accordion-header";
        header.id = headingId;

        const button = document.createElement("button");
        button.className = "accordion-button" + (isOpen ? "" : " collapsed");
        button.type = "button";
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", "#" + collapseId);
        button.setAttribute("aria-expanded", isOpen ? "true" : "false");
        button.setAttribute("aria-controls", collapseId);
        button.textContent = category.title;
        header.appendChild(button);

        // Collapsible panel; data-bs-parent closes the others when one opens
        const collapse = document.createElement("div");
        collapse.id = collapseId;
        collapse.className = "accordion-collapse collapse" + (isOpen ? " show" : "");
        collapse.setAttribute("aria-labelledby", headingId);
        collapse.setAttribute("data-bs-parent", "#skillsAccordion");

        const body = document.createElement("div");
        body.className = "accordion-body";

        if (category.icons) {
            // Icon grid (5 per row, like skillicons.dev perline=5)
            const grid = document.createElement("div");
            grid.className = "skill-icons-grid";

            category.icons.forEach(function(icon) {
                const img = document.createElement("img");
                img.src = icon.src || "https://skillicons.dev/icons?i=" + icon.id;
                img.alt = icon.name;
                img.title = icon.name;
                img.loading = "lazy";
                img.className = "skill-icon";
                grid.appendChild(img);
            });

            body.appendChild(grid);
        } else if (category.list) {
            // Plain unordered list (used for soft skills)
            const ul = document.createElement("ul");
            ul.className = "soft-skills-list";

            category.list.forEach(function(skill) {
                const li = document.createElement("li");
                li.textContent = skill;
                ul.appendChild(li);
            });

            body.appendChild(ul);
        }

        collapse.appendChild(body);
        item.appendChild(header);
        item.appendChild(collapse);
        accordion.appendChild(item);
    });
});
