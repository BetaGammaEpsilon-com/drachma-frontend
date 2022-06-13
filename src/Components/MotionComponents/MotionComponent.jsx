import React from "react";

// a component for rendering a single motion
const MotionComponent = (props) => {

    return (
        <li className='grid grid-cols-3 justify-items-center py-2'>
            <p>{props.date.substring(0,10)}</p>
            <p className='lowercase'>{props.motion}</p>
            <button 
                className='justify-self-center outline rounded-md h-6 px-5 hover:outline-crimson hover:text-crimson'>
                    delete
            </button>
        </li>
    );
}

export default MotionComponent;