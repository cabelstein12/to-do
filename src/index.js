import './style.css';
import {taskForm , addTaskData, taskList} from './newTaskData';
import { addTaskToDom} from './newTaskDom';

function component(){

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTaskData(e);
        addTaskToDom();
    });
        
    addTaskToDom();
    return taskList;
}
document.body.appendChild(component());