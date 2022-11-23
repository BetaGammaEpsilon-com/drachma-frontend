import axios from "axios";
import React, { useState } from "react";

// component for creating new motions
    // TODO:
    // POST request for adding a new motion
const NewMotionComponent = () => {

    const requestUrl = process.env.REACT_APP_BASE_URL + 'tres/motions';

    const [motionField, setMotionField] = useState("");

    const handleFormSubmit = (e) => {

        if (motionField == "") {
            e.preventDefault();
            alert("enter a motion");
        }
        else {
            newMotion();
        }
    }

    const newMotion = async() => {
        let newMotion = {
            motion: motionField
        }
        const result = await axios.post(requestUrl, newMotion)
        .catch(error => console.error(error));
    }

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <p className='text-2xl pb-4'>new motion:</p>
            <div className='grid grid-col-2 grid-flow-row gap-4'>
                <p className='col-start-1'>motion:</p>
                <input 
                    className='col-start-2 text-loyalty lowercase h-9 indent-1'
                    value={motionField}
                    onChange={e => setMotionField(e.target.value)}
                    placeholder='enter motion name'>
                </input>
                <button 
                    type='submit'
                    className='justify-self-end row-start-3 col-start-2 outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'>
                        submit
                </button>
            </div>
        </form>
    );
}

export default NewMotionComponent;