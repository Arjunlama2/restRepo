
const taskArray=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

function HandleTaskAdd(event) {
    event.preventDefault();
    let taskInput = event.target.task.value;
taskArray.push(taskInput);
localStorage.setItem("tasks", JSON.stringify(taskArray));
DisplayTask();
}


function DisplayTask(){
    let taskItems = "";
    
    taskArray.forEach((task,index) => {
        taskItems += `<li>${task}  <button  onClick="DeleteTasks(${index})"><span class="material-symbols-outlined">delete</span> </button></li>`;

})
const taskList = document.getElementById("taskList");
taskList.innerHTML = taskItems;

}

DisplayTask()



function DeleteTasks(index)
{

   
    taskArray.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    DisplayTask();
    
}
