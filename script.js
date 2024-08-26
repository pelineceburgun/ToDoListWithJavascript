
document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("clearCompletedBtn").addEventListener("click", clearCompletedTasks);


function updateTaskCount() {
    const taskList = document.getElementById("taskList");
    const taskCount = taskList.children.length;
    document.getElementById("taskCount").textContent = `Task Count: ${taskCount}`;
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        
        const li = document.createElement("li");

        
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        
        
        li.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        
        taskList.appendChild(li);

        
        taskInput.value = "";
        updateTaskCount();
    }
    else{
        alert("Task can't be empty!");
        return;
    }
}

function removeTask(button) {
    
    button.parentElement.remove();
    updateTaskCount();
}
function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll("#taskList li.completed");
    completedTasks.forEach(task => task.remove());
    updateTaskCount(); 
}    