function createProject() {
  const createBtn = document.getElementById("btn-proj");
  const projects = document.getElementById("menu");
  const textarea = document.getElementById("project-text");

  let value;

  textarea.addEventListener("input", (e) => (value = e.target.value));

  createBtn.addEventListener("click", () => {
    const project = document.createElement("span");
    project.classList.add("proj-link");
    project.setAttribute("ondblclick", "document.location='todo_projects.html'");
    project.setAttribute("contenteditable", "true");
    project.textContent = value;
    projects.appendChild(project);
    textarea.value = "";
    value = "";

    const btn = document.createElement("button");
    btn.classList.add("del-project");
    btn.textContent = "Удалить";
    projects.appendChild(btn);

    btn.addEventListener("click", () => {
      project.remove();
      btn.remove();
    });
  });

  function renameProject() {
    const name = project;

    name.forEach((title) => {
      title.addEventListener("click", (e) => (e.target.textContent = ""));
    });
  }
  renameProject();
}
createProject();
