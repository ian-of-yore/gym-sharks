import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1>Akatsuki Fitness Center</h1>
                </div>
            </div>
            <h3>Be the Rogue Ninja, You've always meant to be!</h3>
        </div>
    );
};

export default Header;