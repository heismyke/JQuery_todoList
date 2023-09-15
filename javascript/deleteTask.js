import { tasks } from "./addTask.js"

export const deleteItem = (taskId) => {
   
    const index = tasks.findIndex(
        function(task){
            return task.id === taskId
        }
    )

    if(index !== -1){
        tasks.splice(index, 1)
    }else{
        alert('Task not found')
    }
}