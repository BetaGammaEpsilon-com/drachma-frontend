import React from "react";

const TransactionComponent = (props) => {

    return (
        <li className='grid grid-cols-6 justify-items-start py-2'>
            <p className='justify-self-center'>{props.transactionId}</p>
            <p className='justify-self-center'>{props.user.name}</p>
            <p className='justify-self-center'>{props.description}</p>
            <p className='justify-self-center'>{props.date}</p>
            <p className='justify-self-center'>{props.motion}</p>
            <p className='justify-self-center'>${props.price}</p>
        </li>
    );
}

export default TransactionComponent;