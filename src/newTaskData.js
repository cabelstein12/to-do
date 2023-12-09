

export const taskList = [
    {
        title: 'Exercise',
        description: 'Leg Day - 45mins',
        dueDate: '2023-12-09',
        priority: 'High',
    }
];
export const taskForm = document.getElementById('task-input');

export function addTask(){

    const newTaskData = new FormData(taskForm);
    const newTask = {
        title: newTaskData.get('title'),
        description: newTaskData.get('description'),
        dueDate: newTaskData.get('due-date'),
        priority: newTaskData.get('priority'),
    }

    taskList.push(newTask);
    taskForm.reset();
}