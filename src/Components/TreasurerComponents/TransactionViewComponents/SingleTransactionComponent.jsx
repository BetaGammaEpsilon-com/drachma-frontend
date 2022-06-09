import React from "react";
import { useParams } from "react-router-dom";

const SingleTransactionComponent = () => {

    let params = useParams();
    let transactionId = params.txid;

    return (
        <div>
            <p>{transactionId}</p>
        </div>
    );

}

export default SingleTransactionComponent;