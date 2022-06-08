import React from "react";

const VerifiedTransactionComponent = (props) => {

    const description = props.description;
    const transactionId = props.transactionId;

    return (
        <li className='grid grid-cols-5 justify-items-start py-4'>
            <p className='justify-self-center px-5 lowercase'>{props.user.name}</p>
            <p className='justify-self-center px-5 lowercase'>{props.date}</p>
            <p className='justify-self-center px-5 lowercase'>{props.motion}</p>
            <p className='justify-self-center px-5 lowercase'>${props.price}</p>
            <button className='justify-self-center outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'>modify</button>
        </li>
    );
}

export default VerifiedTransactionComponent;