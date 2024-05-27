const button = document.getElementById("btn-create");
const btn = document.getElementById("add_task");

function addBoards() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList.add("boards__item");
  var textarea = document.getElementById("message-text").value;
  board.innerHTML = `
  <span contenteditable="true" class="title">${textarea}</span><span class="del_board">&#10006</span>

  <div class="list"></div>
  
  <div class="add__btn">
    <button
      type="button"
      class="btn btn-primary btn-tasks"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
      >Новая задача</button>
  <div>`;
  boards.append(board);

  delBoard();
}

button.addEventListener("click", () => {
  addBoards();
  var textarea = document.getElementById("message-text");
  textarea.value = "";
});

function delBoard() {
  var delboards = document.querySelectorAll(".del_board");
  var boards = document.querySelectorAll(".boards__item");

  for (i = 0; i < boards.length; i++) {
    const board = boards[i];
    const delboard = delboards[i];

    delboard.addEventListener("click", () => {
      board.remove();
    });
  }
}

function addTask() {
  // const cancelBtn = document.getElementById("close-btn");
  var lists = document.querySelectorAll(".list");

  var name = document.querySelector(".task-name").value;
  var form = document.querySelector(".task-description").value;

  const list = document.createElement("div");
  list.classList.add("list__item");
  list.innerHTML = `<span data-bs-target="#taskModal">${name}</span>`;
  lists.appendChild(list);
}

btn.addEventListener("click", () => {
  addTask();
  var textarea = document.querySelector(".task-name");
  textarea.value = "";
});

// function addbtn() {
//   addBtn.addEventListener("click", () => {
//     var lists = document.querySelectorAll(".list");
//     const list = lists[a];
//       const newItem = document.createElement("div");
//       newItem.classList.add("list__item");
//       newItem.textContent = value;
//       lists.append(newItem);
//       textarea.value = "";
//       value = "";
//       form.style.display = "none";
//       btn.style.display = "flex";
//     });

// for (a = 0; a < board.length; a++) {
//   btn[a].addEventListener("click", () => {
//     form[a].style.display = "block";
//     btn[a].style.display = "none";
//     addBtn[a].style.display = "none";

//     textarea[a].addEventListener("input", (e) => {
//       value = e.target.value;
//       if (value) {
//         addBtn[a].style.display = "block";
//       } else {
//         addBtn[a].style.display = "none";
//       }
//     });
//   });

//   cancelBtn[a].addEventListener("click", () => {
//     textarea[a].value = "";
//     value[a] = "";
//     form[a].style.display = "none";
//     btn[a].style.display = "flex";
//   });

//
//   });

// btn.addEventListener("click", () => {
//   event.preventDefault();

// });

// function addTask() {
//   const btn = document.querySelectorAll("add__btn");

//   btn.addEventListener("click", () => {
//     const board = document.querySelectorAll("boards__item");
//   });
// }

// function addTask {
//   const btn = document.querySelectorAll(".add__btn")
//   const addBtn = document.querySelectorAll(".add__item-btn");
//   const cancelBtn = document.querySelectorAll(".cancel__item-btn");
//   const textarea = document.querySelectorAll(".textarea");
//   const form = document.querySelectorAll(".form");
// };

// const textarea = document.getElementById("message-text").value;

// function changeTitle() {
//   const titles = document.querySelectorAll(".title");

//   titles.forEach((title) => {
//     title.addEventListener("click", (e) => (e.target.textContent = ""));
//   });
// }
// changeTitle();

// function addTask() {
//   const btn = document.querySelectorAll(".add__btn");
//   const board = document.querySelectorAll(".boards__item");
//   const addBtn = document.querySelectorAll(".add__item-btn");
//   const cancelBtn = document.querySelectorAll(".cancel__item-btn");
//   const textarea = document.querySelectorAll(".textarea");
//   const form = document.querySelectorAll(".form");

//   for (a = 0; a < board.length; a++) {
//     btn[a].addEventListener("click", () => {
//       form[a].style.display = "block";
//       btn[a].style.display = "none";
//       addBtn[a].style.display = "none";

//       textarea[a].addEventListener("input", (e) => {
//         value = e.target.value;
//         if (value) {
//           addBtn[a].style.display = "block";
//         } else {
//           addBtn[a].style.display = "none";
//         }
//       });
//     });

//     cancelBtn[a].addEventListener("click", () => {
//       textarea[a].value = "";
//       value[a] = "";
//       form[a].style.display = "none";
//       btn[a].style.display = "flex";
//     });

//     addBtn[a].addEventListener("click", () => {
//       const lists = document.querySelectorAll(".list");
//       for (b = 0; b < lists.length; b++) {
//         const newItem = document.createElement("div");
//         newItem.classList.add("list__item");
//         newItem.textContent = value;
//         lists.append(newItem);
//         textarea.value = "";
//         value = "";
//         form.style.display = "none";
//         btn.style.display = "flex";
//       }
//     });
//   }
// }

//let draggedItem = null;

// function dragNdrop() {
//   const listItems = document.querySelectorAll(".list__item");
//   const lists = document.querySelectorAll(".list");

//   for (let i = 0; i < listItems.length; i++) {
//     const item = listItems[i];

//     item.addEventListener("dragstart", () => {
//       draggedItem = item;
//       setTimeout(() => {
//         item.style.display = "none";
//       }, 0);
//     });

//     item.addEventListener("dragend", () => {
//       setTimeout(() => {
//         item.style.display = "block";
//         draggedItem = null;
//       }, 0);
//     });

//     item.addEventListener("dblclick", () => {
//       item.remove();
//     });

//     for (let j = 0; j < lists.length; j++) {
//       const list = lists[j];

//       list.addEventListener("dragover", (e) => e.preventDefault());

//       list.addEventListener("dragenter", function (e) {
//         e.preventDefault();
//         this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
//       });

//       list.addEventListener("dragleave", function (e) {
//         this.style.backgroundColor = "rgba(0, 0, 0, 0)";
//       });

//       list.addEventListener("drop", function (e) {
//         this.style.backgroundColor = "rgba(0, 0, 0, 0)";
//         this.append(draggedItem);
//       });
//     }
//   }
// }
// dragNdrop();
