import { taskList } from "./newTaskData";

export function updateTask (){

    const createAndAppendElement = (tag, textContent) => {
        const element = document.createElement(tag);
        element.textContent = textContent;
        addedTask.append(element);
    }

    const taskSection = document.querySelector('.body');
    const taskData = taskList[taskList.length-1];

    const addedTask = document.createElement('div');
    addedTask.classList.add('list-item');
    
    createAndAppendElement('span', taskData.title);
    createAndAppendElement('span', taskData.description);
    createAndAppendElement('span', taskData.dueDate);
    createAndAppendElement('span', taskData.priority);

    const editButton = document.createElement('button');
    editButton.textContent = 'X';
    
    editButton.addEventListener('click', () => {
        
    })

    addedTask.appendChild(editButton);
    taskSection.append(addedTask);        
}