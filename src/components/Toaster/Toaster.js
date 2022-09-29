import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toaster() {
    const showToastMessage = () => {
        toast.success('You are done for the day', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    return (
        <div>
            <button className='activity-completed' onClick={showToastMessage}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
}

export default Toaster;