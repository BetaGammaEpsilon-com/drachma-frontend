import React from "react";

const TransactionHeaderComponent = () => {

    return (
        <div className='grid grid-cols-5 justify-items-start pt-4 border-b'>
            <div className='justify-self-center'>user</div>
            <div className='justify-self-center'>date</div>
            <div className='justify-self-center'>motion</div>
            <div className='justify-self-center'>price</div>
            <div className='justify-self-center'>action</div>
        </div>
    );
}

export default TransactionHeaderComponent