import React from 'react'
import Header from '../Header/Header';
import './index.css';
import LeftPanel from '../Left/LeftPanel';
import RightPanel from '../Right/RightPanel';

const Index = () => {
    return (
        <div className='container'>
            <Header />
            <div className='content'>
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    )
}

export default Index;
