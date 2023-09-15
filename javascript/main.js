import { addTask } from "./addTask.js";  

const addTaskBtn = document.getElementById('add');


addTaskBtn.addEventListener('click', () => {
   addTask();
})