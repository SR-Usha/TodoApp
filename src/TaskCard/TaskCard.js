import React, { useState } from 'react'
import './TaskCard.css';
import { useTaskContext } from '../TaskContext';
import { FiCheck, FiEdit2, FiEdit, FiEdit3, FiX, FiXCircle} from "react-icons/fi";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { allStatuses, statusToBackgroundClr } from '../Constants';

function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const TaskCard = (props) => {
    const isTop = props.priority || false;
    const taskId = props?.task.id;
    const [taskDescription, setTaskDescription] = useState(props.task?.description);
    const [createdDate, setCreatedDate] = useState(props?.task.createdDate);
    const [dueDate, setDueDate] = useState(props?.task?.dueDate);
    const remainingDays = dueDate ? dateDiffInDays(new Date(), dueDate) : "--";
    const [status, setStatus] = useState(props?.task?.status);
    const [isEditable, setIsEditable] = useState(false);
    const { updateTasks, deleteTask, tasks } = useTaskContext();

    const getDateAsString = (date) => {
        return date ? date.toLocaleDateString() : null;
    }

    const toggleEdit = () => {
        //todo verify is this optimized wayt to update single task
        if (isEditable) {
            const index = tasks.findIndex(t => t.id === taskId)
            tasks[index].description = taskDescription;
            tasks[index].createdDate = createdDate;
            tasks[index].dueDate = dueDate;
            tasks[index].status = status;
            updateTasks(tasks)
        }
        setIsEditable(!isEditable);
    }

    const setStyleBasedOnPriority = () => {
        return { backgroundColor: isTop ? "var(--taskcard-pri-color)" : "var(--taskcard-non-pri-clr)" }
    }
    const getStatusOptions = () => {
        return allStatuses.filter((ele) => ele !== status);
    }

    return (
        <div className='task-container-parent'>
        <div className="task-container" id={taskId} style={setStyleBasedOnPriority()}
            draggable
            onDragStart={props?.onDragStart}
            onDragEnd={props?.onDragEnd}>
            <div className='description-section'>
                {isEditable ? <textarea value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} spellCheck autoFocus>
                </textarea> :
                    <p className='description mb-2'>
                        {taskDescription}
                    </p>
                }
            </div>
            <div>
                {isTop ?
                    <div>
                        <div >
                            <p className='date-label mb-1'>
                                Due Date
                            </p>
                            {isEditable ? <DatePicker className="datePicker" selected={dueDate} onChange={(date) => setDueDate(date)}
                            />
                                :
                                <p className='date-value mb-2'>
                                    {dueDate ? getDateAsString(dueDate) : "--"}
                                </p>
                            }
                        </div>
                        <p className='date-label mb-2'>
                            <span> {remainingDays}</span> days remaining
                        </p>

                        <div className='status mb-2' style={{ backgroundColor: statusToBackgroundClr[status] }}>
                            {status}
                        </div>
                    </div> :
                    <div className='last-row'>
                        <div>
                            <p className='date-label mb-1 '>
                                Created Date
                            </p>
                                <p className='date-value mb-2'>
                                    {getDateAsString(createdDate)}
                                </p>
                        </div>
                    </div>}
                <div className='action-icons mb-2' onClick={toggleEdit}>
                    {isEditable ? <FiCheck /> : <FiEdit3 />}
                </div>
            </div>
            
            <div className='cross' onClick={() => deleteTask(taskId)}>
                <FiX size="1rem" color='black' style={{backgroundColor: "var(--soft-grey)", padding: "2px", borderRadius: "50%"
                , boxShadow: "1px 1px 1px #aaaaaa inset, -1px -1px 1px #aaaaaa inset, 1px 1px 1px #aaaaaa , -1px -1px 1px #aaaaaa " }}/>
            </div>
        </div>
        {isTop && isEditable && <div className='status-options'>
                {getStatusOptions().map(name => <div className='status mrl-2' id={name} style={{ backgroundColor: statusToBackgroundClr[name] }} 
                onClick={(e) => {
                    setStatus(e.target.id)
                }}>
                    {name}
                </div>)}
            </div>
            }
        </div>
    )
}

export default TaskCard;