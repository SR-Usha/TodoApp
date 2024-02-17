import React, { useRef, useState } from 'react'
import './UserInput.css';

const UserInput = () => {
    const [message, setMessage] = useState('');
    const inputRef = useRef()

    const handleChange = (event) => {
        //here we can put the validations on the message that is typed
        setMessage(event.target.value);
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    };

    return (
        <div className='textbox'>
            <textarea ref={inputRef} placeholder='Start here' value={message}
                onChange={handleChange} spellCheck autoFocus>
            </textarea>
            <button className= 'crt-btn'type='submit'>
                Create
            </button>
        </div>
    )
}

export default UserInput;