import React from "react";

const MotionsDropDownComponent = (props) => {
    return (
        <select className='text-loyalty lowercase h-9 indent-1 w-full' 
        onChange={(e) => props.onChange(e)} 
        value={props.value}>
            {
                props.motions.map((motion, index) =>
                    <option key={index} value={motion.motion}>{motion.motion}</option>  
                )
            }
        </select>
    );
}

export default MotionsDropDownComponent;