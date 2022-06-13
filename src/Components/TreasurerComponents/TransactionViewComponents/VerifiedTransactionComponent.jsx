import React from "react";
import { Link } from "react-router-dom";

// Renders verified transactions on the treasurer main screen
const VerifiedTransactionComponent = (props) => {

    const dateYear = props.date.substring(0, 10);
    const transactionId = props.transactionId;

    return (
        <li className='grid grid-cols-5 justify-items-start py-4'>
            <p className='justify-self-center px-5 lowercase'>{props.user}</p>
            <p className='justify-self-center px-5 lowercase'>{dateYear}</p>
            <p className='justify-self-center px-5 lowercase'>{props.motion}</p>
            <p className='justify-self-center px-5 lowercase'>${props.price}</p>
            <Link 
                to={`/verified/${transactionId}`}
                className='justify-self-center outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'>
                    modify
            </Link>
        </li>
    );
}

export default VerifiedTransactionComponent;