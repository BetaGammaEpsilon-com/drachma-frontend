import React from "react";

// a single row in a trasurer report component
const TreasurerReportRowComponent = (props) => {

    const formattedBalance = (Math.round(props.balance * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <li className='grid grid-cols-2'>
            <div className='border w-full text-center lowercase'>{props.name}</div>
            <div className='border w-full text-center'>${formattedBalance}</div>
        </li>
    );
} 

export default TreasurerReportRowComponent;