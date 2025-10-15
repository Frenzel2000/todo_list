const input = document.getElementById("input");
const addButton = document.getElementById("btnAdd");
const list = document.getElementById("list");
const tooltip = document.getElementById("tooltip") 

//load tasks from localStorage or create empty string 
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//save tasks in localStorage as String 
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
}

// 🔹 render tasks 
    function renderTasks() {
        //clear ul 
      list.innerHTML = "";
      // for each t (task) in storage render li 
      tasks.forEach((t, index) => {
        const task = document.createElement("li");
        //render checkbox and check if checked 
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = t.done;
        //render delete Buttonn 
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        //wrapper for style control 
        const textWrapper = document.createElement("span");
        textWrapper.append(checkbox, document.createTextNode(t.text));
        // render line through completed tasks 
        if (t.done) task.style.textDecoration = "line-through";
        //compine tasks in a block 
        task.append(textWrapper, deleteButton);
        list.appendChild(task);

        // box toggeln
        checkbox.addEventListener("change", () => {
          t.done = checkbox.checked;
          task.style.textDecoration = t.done ? "line-through" : "none";
          //changed checkbox boolean save  
          saveTasks();
        });
        // delete storage from deleted task
        deleteButton.addEventListener("click", () => {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        });
      });
    }
    // 🔹 add task by click 
    addButton.addEventListener("click", () => {
      if (input.value.trim() === "") {
        tooltip.innerHTML = "Du musst erst eine Aufgabe eingeben!";
        setTimeout(() => tooltip.innerHTML = "", 4000);
        return;
      }
      //set task values
      tasks.push({ text: input.value, done: false });
      //save task values in localStorage
      saveTasks();
      //clear input 
      input.value = "";
      //render new task
      renderTasks();
    });



//render Tasks by start 
renderTasks(); 
