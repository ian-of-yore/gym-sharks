import React from 'react';
import user from '../../images/user.jpg'
import './User.css'

const User = () => {
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
        </div>
    );
};

export default User;