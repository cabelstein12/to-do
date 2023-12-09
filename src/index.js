import './style.css';
import {taskForm , addTask, taskList} from './newTaskData';
import { updateTask } from './newTaskDom';

function component(){

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(e);
        updateTask();
    });
        
    updateTask()
    return taskList;
}
document.body.appendChild(component());