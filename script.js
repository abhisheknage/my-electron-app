let list = document.getElementById("list");
let newTask = document.getElementById("newTask");
// console.log(newTask);

// console.log("is this even working");

// let addTask = document.getElementById("addTask");
// console.log(addTask);

document.getElementById("addTask").addEventListener("click", () => {
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="list-group-item">${newTask.value}</li>`
  );
  newTask.value = "";
});
