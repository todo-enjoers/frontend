const button = document.getElementById("btn-proj");
const first = document.querySelector(".first");

function firstBoard() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList.add("firstBoard");
  board.innerHTML = `
  <span contenteditable="true" class="title">Несортированные задачи</span>
  <div class="list"></div>

  <div class="form">
    <textarea class="textarea" placeholder="Введите название для карточки"
    ></textarea>

    <div class="buttons">
      <button class="add__item-btn">Добавить карточку</button>
      <button class="cancel__item-btn">Отмена</button>
    </div>
  </div>

  <div class="add__btn"><span>+</span> Добавить карточку</div>`;
  boards.append(board);

  addTask();
  changeTitle();
  dragNdrop();
}

first.addEventListener("click", () => {
  firstBoard();
  first.style.display = "none";
  button.style.display = "flex";
});

function addTask() {
  const btn = document.querySelector(".add__btn");
  const addBtn = document.querySelector(".add__item-btn");
  const cancelBtn = document.querySelector(".cancel__item-btn");
  const textarea = document.querySelector(".textarea");
  const form = document.querySelector(".form");

  let value;

  btn.addEventListener("click", () => {
    form.style.display = "block";
    btn.style.display = "none";
    addBtn.style.display = "none";

    textarea.addEventListener("input", (e) => {
      value = e.target.value;
      if (value) {
        addBtn.style.display = "block";
      } else {
        addBtn.style.display = "none";
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    textarea.value = "";
    value = "";
    form.style.display = "none";
    btn.style.display = "flex";
  });

  addBtn.addEventListener("click", () => {
    const lists = document.querySelectorAll(".list");
    const newItem = document.createElement("div");
    newItem.classList.add("list__item");
    newItem.draggable = true;
    newItem.textContent = value;
    lists[0].append(newItem);
    textarea.value = "";
    value = "";
    form.style.display = "none";
    btn.style.display = "flex";

    dragNdrop();
  });
}

function addBoards() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList.add("boards__item");
  board.innerHTML = `
    <span contenteditable="true" class="title">Без названия</span>
    <div class="list"></div>
    `;
  boards.append(board);

  board.addEventListener("contextmenu", () => {
    event.preventDefault()
    board.remove();
  });

  changeTitle();
  dragNdrop();
}
button.addEventListener("click", addBoards);

function changeTitle() {
  const titles = document.querySelectorAll(".title");

  titles.forEach((title) => {
    title.addEventListener("click", (e) => (e.target.textContent = ""));
  });
}
changeTitle();

let draggedItem = null;

function dragNdrop() {
  const listItems = document.querySelectorAll(".list__item");
  const lists = document.querySelectorAll(".list");

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];

    item.addEventListener("dragstart", () => {
      draggedItem = item;
      setTimeout(() => {
        item.style.display = "none";
      }, 0);
    });

    item.addEventListener("dragend", () => {
      setTimeout(() => {
        item.style.display = "block";
        draggedItem = null;
      }, 0);
    });

    item.addEventListener("dblclick", () => {
      item.remove();
    });

    for (let j = 0; j < lists.length; j++) {
      const list = lists[j];

      list.addEventListener("dragover", (e) => e.preventDefault());

      list.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      });

      list.addEventListener("dragleave", function (e) {
        this.style.backgroundColor = "rgba(0, 0, 0, 0)";
      });

      list.addEventListener("drop", function (e) {
        this.style.backgroundColor = "rgba(0, 0, 0, 0)";
        this.append(draggedItem);
      });
    }
  }
}
dragNdrop();
