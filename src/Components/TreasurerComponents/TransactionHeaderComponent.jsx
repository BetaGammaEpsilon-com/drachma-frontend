import React from "react";

const TransactionHeaderComponent = () => {

    return (
        <div className='grid grid-cols-6 justify-items-start py-2 border-b'>
            <div className='justify-self-center'>Number</div>
            <div className='justify-self-center'>User</div>
            <div className='justify-self-center'>Description</div>
            <div className='justify-self-center'>Date</div>
            <div className='justify-self-center'>Motion</div>
            <div className='justify-self-center'>Price</div>
        </div>
    );
}

export default TransactionHeaderComponent