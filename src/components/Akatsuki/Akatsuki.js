import React from 'react';
import Exercise from '../Exercise/Exercise';
import User from '../User/User';
import './Akatsuki.css'

const Akatsuki = () => {
    
    return (
        <div className='akatsuki'>
            <Exercise></Exercise>
            <User></User>
        </div>
    );
};

export default Akatsuki;