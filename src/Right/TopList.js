import React from 'react'
import TaskCard from '../TaskCard/TaskCard';
import "./RightPanel.css";
import { useTaskContext } from '../TaskContext';

const TopList = (props) => {
    const {tasks} = useTaskContext();
    
    return (
        <div className='top-container right-containers' >
            <p className='right-container-name'>
                Top List
            </p>
            <div className='cards-container' id="priority-container" onDragOver ={(e)=> e.preventDefault() } onDragEnter={props?.onDragOver}>
            {tasks.filter((task) => {
                    return task?.isPriority
                }).map((task) => {
                return (<TaskCard key={task.id} task={task} priority onDragStart={props?.onDragStart} onDragEnd={props?.onDragEnd} />
                )
            })
            }
            </div> 
        </div>
    )
}

export default TopList;