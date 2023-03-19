console.log("To Do List");

//localStorage.clear();

const newTask = document.querySelector(".input-task");
const newBtnTaskAdd = document.querySelector(".btn-task-add");

const taskList = document.querySelector(".task-list");

document.addEventListener("DOMContentLoaded", localStorageREAD); //Bütün DOM yapsısı yüklendikten sonra fonksiyonu çağır

newBtnTaskAdd.addEventListener("click", newTaskAdd);

function newTaskAdd(e) {
  console.log("Clicked");

  if (newTask.value.length > 0) {
    taskItemCreate(newTask.value);

    //local Storage kaydet
    localStorageADD(newTask.value);
    newTask.value = "";
  } else {
    alert("It cannot be empty....");
  }
}

taskList.addEventListener("click", taskDelete);
function taskDelete(e) {
  //console.log(e.target);
  const clickedElement = e.target;
  if (clickedElement.classList.contains("task-btn-copleted")) {
    console.log("Check Clicked..");
    clickedElement.parentElement.classList.toggle("task-completed"); //toggle: yoksa task-completed css sini ekliyor varsa siliyor
  }
  if (clickedElement.classList.contains("task-btn-delete")) {
    if (confirm('Are you sure..')) {
      console.log("DElete Clicked..");
      clickedElement.parentElement.classList.toggle("lost");

      //Local storage Delete Function call
      const deletedTask = clickedElement.parentElement.children[0].innerText;
      console.log(deletedTask);
      localStorageDELETE(deletedTask);

      clickedElement.parentElement.addEventListener(
        "transitionend",
        function () {
          clickedElement.parentElement.remove();
        }
      );
    }

    //clickedElement.parentElement.remove();
  }
}

function taskItemCreate(task) {
  //div create
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item");

  //li create
  const taskLi = document.createElement("li");
  taskLi.classList.add("task-description");

  taskLi.innerText = task; //newTask.value;

  //Completed button create
  const taskCompleteBtn = document.createElement("button");
  taskCompleteBtn.classList.add("task-btn");
  taskCompleteBtn.classList.add("task-btn-copleted");
  taskCompleteBtn.innerHTML = '<i class="far fa-regular fa-square-check"></i>';

  //Delete button create
  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.classList.add("task-btn");
  taskDeleteBtn.classList.add("task-btn-delete");
  taskDeleteBtn.innerHTML = '<i class="far fa-solid fa-trash-can"></i>';

  //div'e oluşturduğumuz li, create task button, delete button eklyelim
  taskDiv.appendChild(taskLi);
  taskDiv.appendChild(taskCompleteBtn);
  taskDiv.appendChild(taskDeleteBtn);

  //ul'ye oluşturduğumuz div ekleyelim
  taskList.appendChild(taskDiv);
}

//local Storage

function localStorageADD(newTask) {
  let tasks;
  if (localStorage.getItem("Tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("Tasks")); //Json formatındaki aldığımız değerleri tasks arrayine atadık
  }
  tasks.push(newTask);
  localStorage.setItem("Tasks", JSON.stringify(tasks));
}

function localStorageREAD() {
  let tasks;
  if (localStorage.getItem("Tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("Tasks")); //Json formatındaki aldığımız değerleri tasks arrayine atadık
  }

  tasks.forEach(function (task) {
    taskItemCreate(task);
  });
}

function localStorageDELETE(task) {
  let tasks;
  if (localStorage.getItem("Tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("Tasks")); //Json formatındaki aldığımız değerleri tasks arrayine atadık
  }

  const deletedTaskİndex = tasks.indexOf(task);
  console.log(deletedTaskİndex);
  tasks.splice(deletedTaskİndex, 1);

  localStorage.setItem("Tasks", JSON.stringify(tasks));
}
