console.log("To Do List");

const newTask = document.querySelector(".input-task");
const newBtnTaskAdd = document.querySelector(".btn-task-add");

const taskList = document.querySelector(".task-list");

newBtnTaskAdd.addEventListener("click", newTaskAdd);

function newTaskAdd(e) {
  console.log("Clicked");

  //div create
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item");

  //li create
  const taskLi = document.createElement("li");
  taskLi.classList.add("task-description");

  taskLi.innerText = newTask.value;

  //Completed button create
  const taskCompleteBtn = document.createElement("button");
  taskCompleteBtn.classList.add("task-btn");
  taskCompleteBtn.classList.add("task-btn-copleted");
  taskCompleteBtn.innerHTML = '<i class="fa-regular fa-square-check"></i>';

  //Delete button create
  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.classList.add("task-btn");
  taskDeleteBtn.classList.add("task-btn-delete");
  taskDeleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  //div'e oluşturduğumuz li, create task button, delete button eklyelim
  taskDiv.appendChild(taskLi);
  taskDiv.appendChild(taskCompleteBtn);
  taskDiv.appendChild(taskDeleteBtn);

  //ul'ye oluşturduğumuz div ekleyelim
  taskList.appendChild(taskDiv);

  newTask.value='';
}
