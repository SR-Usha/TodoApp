import React from 'react'
import './LeftPanel.css';
import UserInput from '../UserInput/UserInput';
import todo_image from '../todo_cropped.png';

const LeftPanel = () => {
    return (
        <div className='left-container'>
            <img width="100%" height="40%" src={todo_image} />
            <UserInput />
        </div>
    )
}

export default LeftPanel;