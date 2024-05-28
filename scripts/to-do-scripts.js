// Функции для закрытия/открытия панели навигации
function openNav() {
  document.getElementById("side-bar").style.width = "250px";
  document.querySelector(".app").style.filter = "brightness(40%)";
  document.querySelector(".app").style.transition = "filter 0.8s";
  document.getElementById("addProject").setAttribute("disabled", "true");
}

function closeNav() {
  document.getElementById("side-bar").style.width = "0";
  document.querySelector(".app").style.filter = "";
  document.querySelector(".app").style.transition = "filter 0.8s";
  document.getElementById("addProject").removeAttribute("disabled", "true");
}

// Открытие/закрытие модального окна с созданием проекта
const button = document.getElementById("addProject");
const closeBtn = document.querySelector(".modal-close-button");

button.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("modal-active");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal-active");
});

// Создание проекта и добавление его в список
function createProject() {
  const createBtn = document.getElementById("createProject");
  const projects = document.getElementById("menu");
  var textarea = document.querySelector(".project-name-text");

  let value;

  textarea.addEventListener("input", (e) => (value = e.target.value));

  createBtn.addEventListener("click", () => {
    const project = document.createElement("span");
    project.classList.add("project-name");
    project.textContent = textarea.value;
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
}
createProject();
