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
var textarea = document.getElementById("boardNameTest");

function addBoards() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList.add("boards-item");
  board.innerHTML = `
  <span contenteditable="true" class="title">${textarea.value}</span>
  <span class="del-board">&#10006</span>

  <div class="list"></div>
  
  <div class="add-btn">
    <button
      type="button"
      class="btn-tasks"
      >Новая задача</button>
  <div>`;
  boards.append(board);

  delBoard();
}

btn.addEventListener("click", () => {
  addBoards();
  textarea.value = "";
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

function changeTitle() {
  const titles = document.querySelectorAll(".title");

  titles.forEach((title) => {
    title.addEventListener("click", (e) => (e.target.textContent = ""));
  });
}
changeTitle();
