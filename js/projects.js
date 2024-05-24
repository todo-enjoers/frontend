function createProject() {
  const createBtn = document.getElementById("btn-proj");
  const projects = document.getElementById("menu");
  const textarea = document.getElementById("project-text");

  let value;

  textarea.addEventListener("input", (e) => (value = e.target.value));

  createBtn.addEventListener("click", () => {
    const newItem = document.createElement("a");
    newItem.href = "";
    newItem.classList.add("proj-link");
    newItem.textContent = value;
    projects.appendChild(newItem);
    textarea.value = "";
    value = "";
  });
}
createProject();

