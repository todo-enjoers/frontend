const button = document.getElementById("btn-create");

function addBoards() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList.add("boards__item");
  var textarea = document.getElementById("message-text").value;
  board.innerHTML = `
  <span contenteditable="true" class="title">${textarea}</span><span class="del_board">&#10006</span>

  <div class="list"></div>
  
  <div class="add__btn"><span>+</span> Добавить задачу<div>`;
  boards.append(board);

  delBoard();
}

button.addEventListener("click", () => {
  addBoards();
  var textarea = document.getElementById("message-text");
  textarea.value = "";
  value = "";
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
  const btn = document.querySelectorAll("add__btn");

  btn.addEventListener("click", () => {

  })
}

// function addTask() {
//   const btn = document.querySelectorAll("add__btn");

//   btn.addEventListener("click", () => {
//     const board = document.querySelectorAll("boards__item");
//   });
// }

// textarea.addEventListener("input", (e) => {
//   const namearea = document.querySelector(".title");
//   value = e.target.value;
//   namearea.textContent = value;
// });

// const namearea = document.querySelector(".title");
// const textarea = document.getElementById("message-text");
// textarea.on("change", (e) => {
//   value = e.target.value;
//   namearea = value;
// });

// let value;

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

/*
first.addEventListener("click", () => {
  firstBoard();
  first.style.display = "none";
  button.style.display = "flex";
});
*/

//addTask();
//changeTitle();
//dragNdrop();

// //const first = document.querySelector(".first");

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
