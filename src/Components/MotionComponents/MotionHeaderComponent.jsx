import React from "react";

// header for the motions list
const MotionHeaderComponent = () => {
    return (
        <div className='grid grid-cols-3 justify-items-center mt-2 border-b'>
            <p>date</p>
            <p>motion</p>
            <p>action</p>
        </div>
    );
}

export default MotionHeaderComponent;