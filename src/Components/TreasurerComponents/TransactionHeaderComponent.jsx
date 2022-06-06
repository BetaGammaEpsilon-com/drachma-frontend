import React from "react";

const TransactionHeaderComponent = () => {

    return (
        <div className='grid grid-cols-5 justify-items-start pt-4 border-b'>
            <div className='justify-self-center'>User</div>
            <div className='justify-self-center'>Date</div>
            <div className='justify-self-center'>Motion</div>
            <div className='justify-self-center'>Price</div>
            <div className='justify-self-center'>Action</div>
        </div>
    );
}

export default TransactionHeaderComponent