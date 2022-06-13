import React from "react";
import { useParams } from "react-router-dom";
import TitleComponent from "../../OtherComponenets/TitleComponent";

// handles the view for looking at a single verified transaction
const SingleUnverifiedTransactionComponent = () => {

    let params = useParams();
    let transactionId = params.txid;

    return (
        <div>
            <TitleComponent />
            {transactionId}
        </div>
    )
}

export default SingleUnverifiedTransactionComponent;