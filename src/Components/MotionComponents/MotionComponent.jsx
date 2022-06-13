import React, { useState } from "react";

// a component for rendering a single motion
const MotionComponent = (props) => {

    const handleDeleteMotion = () => {
        const confirmation = window.confirm("Are you sure you want to delete this motion?");
        if (confirmation) {
            // delete request here
        }
    }

    return (
        <li className='grid grid-cols-3 justify-items-center py-2'>
            <p>{props.date.substring(0,10)}</p>
            <p className='lowercase'>{props.motion}</p>
            <button 
                className='justify-self-center outline rounded-md h-6 px-5 hover:outline-crimson hover:text-crimson'
                onClick={handleDeleteMotion}>
                    delete
            </button>
        </li>
    );
}

export default MotionComponent;