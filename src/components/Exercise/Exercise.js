import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise, handleExercise }) => {
    const { img, name, description, time } = exercise;
    // console.log(props)

    return (
        <div className='exercise'>
            <div className='exercise-info'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p><span className='exercise-info-title'>Description:</span> {description}</p>
                <p><span className='exercise-info-title'>Time: </span>{time} Sec</p>
            </div>
            <div>
                <button onClick={() => handleExercise(time)} className='btn-add-to-list'>Add to List</button>
            </div>
        </div>
    );
};

export default Exercise;