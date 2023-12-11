import { taskList } from "./newTaskData";

export function addTaskToDom (){

    const createAndAppendElement = (tag, textContent, type) => {
        const element = document.createElement(tag);
        element.textContent = textContent;
        addedTask.append(element);
        element.type = type;

    }

    const taskSection = document.querySelector('.current-tasks');
    const taskData = taskList[taskList.length-1];
    
    const addedTask = document.createElement('div');
    addedTask.classList.add('list-item');
    // addedTask.setAttribute('')
    
    createAndAppendElement('span', taskData.title);
    createAndAppendElement('span', taskData.description);
    createAndAppendElement('span', taskData.dueDate);
    createAndAppendElement('span', taskData.priority);
    
    
    const removeButton = document.createElement('button');
    const taskIndex = taskList.length;
    removeButton.setAttribute('task-index', taskIndex)
    removeButton.textContent = 'X';
    
    removeButton.addEventListener('click', (event) => {
        const clickedButton = event.target; //button element that is clicked 
        console.log(event.target);
        const taskIndexToRemove = parseInt(clickedButton.getAttribute('task-index'), 10);
        taskList.splice(taskIndexToRemove, 1);
        addedTask.remove();
})

    // console.log(taskList.length);
    addedTask.appendChild(removeButton);
    taskSection.append(addedTask);        
}