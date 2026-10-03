const projects = [
  {
    title: "MA Städ – Cleaning Company Website",
    status: "done",
    role: "Full-stack developer, solo project",
    description:
      "Website and booking system for a cleaning company. Customers get an instant price and book online in Swedish or English, and staff manage bookings, schedules and employees in an admin panel. Every pull request runs tests and a build in GitHub Actions.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
      "GitHub Actions",
    ],
    image: "./icons/ma-stad.png",
    repo: "https://github.com/WhiteRoadToJava/ms-stad-web",
    apiRepo: "https://github.com/WhiteRoadToJava/ms-stad-api",
    demo: "https://mastad.se/",
  },
    {
    title: "myBudget – Personal Finance API",
    status: "done",
    role: "Backend developer, solo project",
    description:
      "REST API for personal finances: accounts, incomes, expenses, transfers between accounts, recurring scheduled payments and reports for any date range. Secured with Spring Security and JWT, with admin user management, and packaged with Docker.",
    tech: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MongoDB", "Docker"],
    image: "./icons/mybudget.png",
    repo: "https://github.com/WhiteRoadToJava/myBudget",
    demo: "https://www.mybudget.win/home"
  },
  {
    title: "Library Management System",
    status: "done",
    role: "Solo project",
    description:
      "Manages books and members: checkouts, returns, search, and adding or removing books and member accounts.",
    tech: ["Java"],
    image: "./icons/library.png",
    repo: "https://github.com/WhiteRoadToJava/biblan-24",
    demo: "",
  },
  {
    title: "Plant Swap Shop",
    status: "done",
    role: "Solo project",
    description:
      "Tracks plant names, prices and quantities, with a cart that calculates the total purchase cost. Data stored in MongoDB.",
    tech: ["Java", "MongoDB"],
    image: "./icons/plants.jpg",
    repo: "https://github.com/WhiteRoadToJava/swap_plants-mongoDB",
    demo: "",
  },
  {
    title: "Working Time Calculator",
    status: "done",
    role: "Solo project",
    description:
      "Enter start and end times and get total working hours, with support for several time formats.",
    tech: ["Java"],
    image: "./icons/working-time.png",
    repo: "https://github.com/WhiteRoadToJava/Empoyee-work-time",
    demo: "",
  },
  {
    title: "Bank Management System",
    status: "done",
    role: "Solo project",
    description:
      "Automates everyday banking: deposits, withdrawals and looking up account holder information.",
    tech: ["Java"],
    image: "./icons/bank-project.png",
    repo: "",
    demo: "",
  },
];

function projectCard(p) {
  const badge =
    p.status === "in-progress" ? '<span class="badge">Building now</span>' : "";

  const tags = p.tech.map((t) => `<li>${t}</li>`).join("");

  const links = [
    p.repo ? `<a class="cta" href="${p.repo}" target="_blank" rel="noopener">View code</a>` : "",
    p.apiRepo ? `<a class="cta" href="${p.apiRepo}" target="_blank" rel="noopener">API code</a>` : "",
    p.demo ? `<a class="cta" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>` : ""
  ].join("");

  return `
    <div class="project-item">
      <div class="project-info">
        <h1>${p.title} ${badge}</h1>
        ${p.role ? `<h2>${p.role}</h2>` : ""}
        <p>${p.description}</p>
        ${tags ? `<ul class="tech-tags">${tags}</ul>` : ""}
        <div class="project-links">${links}</div>
      </div>
      ${
        p.image
          ? `<div class="project-img">
        <img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy">
      </div> `
          : ""
      }
    </div>`;
}

function renderProjects() {
  const current = document.getElementById("project-list");
  const upcoming = document.getElementById("upcoming-list");

  if (current) {
    current.innerHTML = projects
      .filter((p) => p.status !== "planned")
      .map(projectCard)
      .join("");
  }

  if (upcoming) {
    const planned = projects.filter((p) => p.status === "planned");
    upcoming.innerHTML = planned.length
      ? planned.map(projectCard).join("")
      : "<p>New projects are on the way.</p";
  }
}

document.addEventListener("DOMContentLoaded", renderProjects);
