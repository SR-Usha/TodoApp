import React, { useRef } from 'react'
import TaskCard from '../TaskCard/TaskCard'
import "./RightPanel.css";
import { useTaskContext } from '../TaskContext';

function AllTask(props) {
    
    const { tasks } = useTaskContext();

    return (
        <div className='allTask-container right-containers'>
            <p className='right-container-name'>
                All Tasks
            </p>
            <div className='cards-container' id="non-priority-container" onDragOver ={(e)=> e.preventDefault()} onDragEnter={(e) => {e.preventDefault();
                props?.onDragOver(e)}}>
                {tasks.filter((task) => {
                    return !task?.isPriority
                }).map((task) => {
                    return <TaskCard key={task.id} task={task} onDragStart={props?.onDragStart} onDragEnd={props?.onDragEnd} />
                })}
            </div>
        </div>
    )
}

export default AllTask;