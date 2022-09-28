import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    // console.log(props)
    return (
        <div className='exercise'>
            <div className='exercise-info'>
                <img src={props.img} alt="" />
                <h2>{props.name}</h2>
                <p><span className='exercise-info-title'>Description:</span> {props.description}</p>
                <p><span className='exercise-info-title'>Time: </span>{props.time} Sec</p>
            </div>
            <div>
                <button className='btn-add-to-list'>Add to List</button>
            </div>
        </div>
    );
};

export default Exercise;