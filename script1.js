document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function () {
        const taskTaken = taskInput.value.trim();
        if (taskTaken !== '') {
            const newTaskItem = document.createElement('li');
            newTaskItem.className = 'task-item';
            newTaskItem.innerHTML = `${taskTaken} <button class="delete">Delete</button>`;
            taskList.appendChild(newTaskItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });
});
