import React from "react";

const TransactionComponent = (props) => {

    return (
        <li>
            <p>Transaction ID: {props.transactionId}</p>
            <p>User ID: {props.userId}</p>
            <p>User Name: {props.user.name}</p>
            <p>Date: {props.date}</p>
            <p>Price: {props.price}</p>
            <p>Motion:{props.motion}</p>
            <p>Description: {props.description}</p>
        </li>
    );
}

export default TransactionComponent;