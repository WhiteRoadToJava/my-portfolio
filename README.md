# Mohammad Abbas – Portfolio

Personal portfolio website for **Mohammad Abbas**, a Java developer
based in Kinna, Sweden. It presents my projects, skills and CV.

**Live site:** https://whiteroadtojava.github.io/my-protofile/

## Featured projects

| Project | Stack |
| --- | --- |
| [myBudget](https://github.com/WhiteRoadToJava/myBudget) – personal finance REST API | Java 17, Spring Boot, Spring Security, JWT, MongoDB, Docker |
| [MA Städ](https://github.com/WhiteRoadToJava/ms-stad-web) – website and booking system for a cleaning company | React, Vite, Node.js, Express, Prisma, MySQL |

## Built with

- HTML, CSS and vanilla JavaScript
- No frameworks or build tools: open `index.html` and it runs

## Project structure

```
index.html         Main page
my-cv.html         CV (in Swedish)
projects.js        Project data and card rendering
app.js             Mobile menu and header scroll effect
*Style.css         One stylesheet per section
icons/             Images and icons
```

## Adding a project

All projects live in `projects.js`. To add one, copy an existing
object in the `projects` array and change its values:

```javascript
{
  title: "Project name",
  status: "done",          // "done", "in-progress" or "planned"
  role: "Solo project",
  description: "What it does.",
  tech: ["Java", "Spring Boot"],
  image: "./icons/project.png",
  repo: "https://github.com/...",
  demo: ""
}
```

Projects with `status: "planned"` appear under **Coming next**.
Empty `repo` or `demo` values hide their buttons.

## Contact

- GitHub: [WhiteRoadToJava](https://github.com/WhiteRoadToJava)
- LinkedIn: [msaabbas](https://www.linkedin.com/in/msaabbas)