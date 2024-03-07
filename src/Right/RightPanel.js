import React, { useRef, useState } from 'react'
import TopList from './TopList';
import AllTask from './AllTask';
import { useTaskContext } from '../TaskContext';
import { TODO } from '../Constants';

const RightPanel = () => {
    
    const {tasks, updateTasks} = useTaskContext();
    const dragItem = useRef();
    const [dragOverItem, setDragOverItem] = useState("");
    
    const onDragStart = (e) => {
        dragItem.current = e.target.id;
    }
    const onDragOver = (e) => {
        e.preventDefault();
        setDragOverItem(e.target?.id);
    }

    const onDragEnd = (e) => {
        const index = tasks.findIndex(task => task.id == e.target?.id);
        if(dragOverItem === "priority-container") {
            tasks[index].isPriority = true;
            tasks[index].status = TODO; 
        } else if (dragOverItem === "non-priority-container") {
            tasks[index].isPriority = false;
            tasks[index].status = TODO;
        }         
        updateTasks(tasks)

    }

    return (
        <div className='right-panel'>
            <TopList onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}/>
            <AllTask onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}/>
        </div>
    )
}

export default RightPanel;