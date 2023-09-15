const taskArea = document.getElementById('taskArea');
const unorderedList = document.getElementById('unorderedList');
import { deleteItem } from "./deleteTask.js";

export const tasks = []

export const addTask = () => {
    
    const taskInput = taskArea.value.trim();

    if(taskInput!=='') { //you can also check if task.length is greater than 0
        const task = {
            id : Date.now(),
            text : taskInput
        }

        tasks.push(task);
        
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        
        li.textContent = task.text;

        const delBtn = document.createElement('button');
        const icon = document.createElement('i');

        icon.classList.add('fa-solid', 'fa-trash-can');
        
        delBtn.classList.add('btn');
        delBtn.appendChild(icon);
        delBtn.onclick = () =>{
            deleteItem(task.id);
            li.remove()
        }

        li.appendChild(delBtn);
        unorderedList.appendChild(li);
        taskArea.value = " "
    }
    
}