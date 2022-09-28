import React from 'react';
import logo from '../../images/logo.png'

import './Exercise.css'

const Exercise = () => {
    return (
        <div className='exercise-container'>
            <div className='header'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1>Akatsuki Fitness Center</h1>
                </div>
            </div>
            <h3>Be the Rougue Ninja, You've always meant to be!</h3>
        </div>
    );
};

export default Exercise;