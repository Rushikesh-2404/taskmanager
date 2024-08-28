function task(){
    const taskinput = document.getElementById("task-input");
    const addtaskbutton = document.getElementById("add-task-button");
    const taskList = document.getElementById('task-list');

    
    taskList.innerHTML = localStorage.getItem('taskData', taskList.innerHTML);

    addtaskbutton.addEventListener('click',function(){

        //read the value of input field .value inbuild mehtod
        const taskTaken = taskinput.value;
        if (taskTaken != ''){
            const newTaskItem = document.createElement('li');
            newTaskItem.className = 'task-item';
            newTaskItem.innerHTML = taskTaken + ' <button class="delete">Delete</button> ';
            taskList.appendChild(newTaskItem);

            localStorage.setItem('taskData', taskList.innerHTML);

            taskinput.value = '';

        }
    });

    taskList.addEventListener('click', function(completelist) {
        const clickedElementsClasses = completelist.target.classList;
        if (clickedElementsClasses.contains('delete')){
            const taskItemToBeRemoved = completelist.target.parentElement;
            taskList.removeChild(taskItemToBeRemoved);

            localStorage.setItem('taskData', taskList.innerHTML);
        }
});
}
// Call task function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    task();
});