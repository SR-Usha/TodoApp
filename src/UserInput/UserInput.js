import React, { useRef, useState } from 'react'
import './UserInput.css';
import { useTaskContext } from '../TaskContext';

const UserInput = () => {
    const [message, setMessage] = useState('');
    const inputRef = useRef()
    const { addTask } = useTaskContext();

    const handleChange = (event) => {
        //here we can put the validations on the message that is typed
        setMessage(event.target.value);
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    };
    const createTask = () => {
    addTask(message);
    setMessage('');
    }

    return (
        <div className='textbox'>
            <textarea ref={inputRef} placeholder='Start here' value={message}
                onChange={handleChange} spellCheck autoFocus>
            </textarea>
            <button className='crt-btn' type='submit' disabled={!message} 
                onClick={createTask}>
                Create
            </button>
        </div>
    )
}

export default UserInput;