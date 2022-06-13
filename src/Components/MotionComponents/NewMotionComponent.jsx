import React, { useState } from "react";

// component for creating new motions
    // TODO:
    // POST request for adding a new motion
const NewMotionComponent = () => {

    const ZebIP = 'http://127.0.0.1:5000/tres/motions';

    const [motionField, setMotionField] = useState("");

    const createNewMotion = () => {

        console.log(motionField);
    }

    return (
        <form>
            <p className='text-2xl pb-4'>New Motion:</p>
            <div className='grid grid-col-2 grid-flow-row gap-4'>
                <p className='col-start-1'>motion:</p>
                <input 
                    className='col-start-2 text-loyalty lowercase'
                    value={motionField}
                    onChange={e => setMotionField(e.target.value)}
                    placeholder='enter motion name'>
                </input>
                <button 
                    type='submit'
                    className='justify-self-end row-start-3 col-start-2 outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'
                    onClick={createNewMotion}>
                        submit
                </button>
            </div>
        </form>
    );
}

export default NewMotionComponent;