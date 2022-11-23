import axios from "axios";
import React, { useState } from "react";

// a component for rendering a single motion
const MotionComponent = (props) => {

    const requestUrl = process.env.REACT_APP_BASE_URL + 'tres/motions';

    const constant = props.motion == "house" || props.motion == "eboard" || props.motion == "drachma_admin";

    const handleDeleteMotion = () => {
        const confirmation = window.confirm("Are you sure you want to permanently delete this motion?");
        if (confirmation) {
            deleteMotion();
        }
    }
    
    const deleteMotion = async() => {
        let deleteBody = {
            data : {
                motion: props.motion
            }
        };
        const result = await axios.delete(requestUrl, deleteBody)
        .catch(error => console.error(error));

        window.location.reload();
    }

    return (
        <li className='grid grid-cols-3 justify-items-center py-2'>
            <p>{props.date.substring(0,10)}</p>
            <p className='lowercase'>{props.motion}</p>
            {  !constant &&
                <button 
                    className='justify-self-center outline rounded-md h-6 px-5 hover:outline-sacrafice hover:text-sacrafice'
                    onClick={handleDeleteMotion}>
                        delete
                </button>
            }
        </li>
    );
}

export default MotionComponent;