import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    // console.log(props)
    return (
        <div className='exercise'>
            <div className='exercise-info'>
                <img src={props.img} alt="" />
                <h4>Name: {props.name}</h4>
                <p>Description: {props.description}</p>
                <p>Time: {props.time} Sec</p>
            </div>
            <div>
                <button className='btn-add-to-list'>Add to List</button>
            </div>
        </div>
    );
};

export default Exercise;