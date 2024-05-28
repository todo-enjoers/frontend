// Функции для закрытия/открытия панели навигации
function openNav() {
  document.getElementById("side-bar").style.width = "250px";
  document.querySelector(".app").style.filter = "brightness(40%)";
  document.querySelector(".app").style.transition = "filter 0.8s";
  document.getElementById("addBoard").setAttribute("disabled", "true");
}

function closeNav() {
  document.getElementById("side-bar").style.width = "0";
  document.querySelector(".app").style.filter = "";
  document.querySelector(".app").style.transition = "filter 0.8s";
  document.getElementById("addBoard").removeAttribute("disabled", "true");
}

// Открытие/закрытие модального окна с созданием проекта
const button = document.getElementById("addBoard");
const closeBtn = document.querySelector(".modal-close-button");

button.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("modal-active");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal-active");
});

// Создание доски и добавление на страницу
const btn = document.getElementById("createBoard");
var textarea = document.getElementById("boardName").value;

function addBoards() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList.add("boards-item");
  board.innerHTML = `
  <span class="title">${textarea}</span>
  <span class="del-board">&#10006</span>

  <div class="list"></div>`;
  boards.append(board);

  delBoard();
}

btn.addEventListener("click", () => {
  addBoards();
  textarea = "";
});

function delBoard() {
  var delboards = document.querySelectorAll(".del-board");
  var boards = document.querySelectorAll(".boards-item");

  for (i = 0; i < boards.length; i++) {
    const board = boards[i];
    const delboard = delboards[i];

    delboard.addEventListener("click", () => {
      board.remove();
    });
  }
}

// function addTask() {
//   // const cancelBtn = document.getElementById("close-btn");
//   var lists = document.querySelectorAll(".list");

//   var name = document.querySelector(".task-name").value;
//   var form = document.querySelector(".task-description").value;

//   const list = document.createElement("div");
//   list.classList.add("list__item");
//   list.innerHTML = `<span data-bs-target="#taskModal">${name}</span>`;
//   lists.appendChild(list);
// }

// btn.addEventListener("click", () => {
//   addTask();
//   var textarea = document.querySelector(".task-name");
//   textarea.value = "";
// });
