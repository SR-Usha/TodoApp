import { createContext, useContext, useState } from "react";
import { TODO } from "./Constants";

const TaskContext = createContext(null)
export const TaskContextProvider = ({ children }) => {

    const [nextId, setNextId] = useState(0); 
    const [tasks, setTasks] = useState([]);

    const updateTasks = (updatedTasks) => {
        setTasks([...updatedTasks]);
    }

    const updateTask = (task) =>{
        //to be updated
    }

    const addTask = (message) => {
        setTasks([ {
            "id": nextId,
            "description": message,
            "createdDate": new Date(),
            "dueDate": null,
            "isPriority": false,
            "status": TODO
        }, ...tasks ])
        setNextId(nextId+1);
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter( task => task.id !== taskId));
    }

    return (<TaskContext.Provider value={{ tasks, addTask, updateTasks, deleteTask, updateTask}}>
        {children}
    </TaskContext.Provider>)
}

export const useTaskContext = () => useContext(TaskContext);