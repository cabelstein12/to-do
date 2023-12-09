import './style.css';
import {taskForm , addTask} from './newTaskData';
import { updateTask } from './newTaskDom';

function component(){

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(e);
        updateTask();
    });
        
    updateTask()
    return addedTask;
}
document.body.appendChild(component());