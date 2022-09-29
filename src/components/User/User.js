import React from 'react';
import user from '../../images/user.jpg'
import './User.css'

const User = (props) => {
    // console.log(props.exerciseTime)
    let totalExerciseTime = 0;
    for (let time of props.exerciseTime) {
        totalExerciseTime = totalExerciseTime + time;
    }

    return (
        <div className='user-container'>
            <div className='user-profile'>
                <div>
                    <img src={user} alt="" />
                </div>
                <div>
                    <h2>Yellow Submarine</h2>
                    <h4>Liverpool, England</h4>
                </div>
            </div>
            <div className='user-info'>
                <div className='user-info-details'>
                    <div><div className='user-weight'>
                        <h1>72</h1>
                        <p> Kg</p>
                    </div>
                        <h3>Weight</h3></div>
                </div>
                <div className='user-info-details'>
                    <div><div className='user-weight'>
                        <h1>5.9</h1>

                    </div>
                        <h3>Height</h3></div>
                </div>
                <div className='user-info-details'>
                    <div><div className='user-weight'>
                        <h1>26</h1>
                        <p> Yrs</p>
                    </div>
                        <h3>Age</h3></div>
                </div>
            </div>
            <h2>Add A Break</h2>
            <div className='break-info'>
                <button className='btn-break'>10s</button>
                <button className='btn-break'>20s</button>
                <button className='btn-break'>30s</button>
                <button className='btn-break'>40s</button>
                <button className='btn-break'>50s</button>

            </div>
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <h3>Exercise Time: {totalExerciseTime} Sec</h3>
                <h3>Break Time: </h3>
            </div>
            <button className='activity-completed'>Activity Completed</button>
        </div>
    );
};

export default User;