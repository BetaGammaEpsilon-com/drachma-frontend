import React, { useState, useEffect} from "react";
import axios from "axios";
import TitleComponent from "../../OtherComponenets/TitleComponent";
import TransactionHeaderComponent from "./TransactionHeaderComponent";
import VerifiedTransactionComponent from "./VerifiedTransactionComponent";

// fully displays the verfied transactions
const FullVerifiedTransactionComponent = () => {

    const ZebIP = "http://127.0.0.1:5000/tres";

    const [transactionsVerifiedList, setTransactionsVerifiedList] = useState([]);
    
    useEffect(() => {
        const fetchTransactions = async() => {
            const result = await axios(
                ZebIP
            );
            
            let returnedData = result.data;

            setTransactionsVerifiedList(returnedData.verified_tx);
        }
    
        fetchTransactions();
      }, []);


    return (
        <div>
            <TitleComponent />
            <div className='px-5 py-5'>
                <p className='text-2xl font-semibold'>verified transactions:</p>
                <TransactionHeaderComponent />
                    <ul className='list-none'>
                        {
                            transactionsVerifiedList.map(transaction => 
                                <VerifiedTransactionComponent
                                    key={transaction.transaction.txid}
                                    transactionId={transaction.transaction.txid}
                                    date={transaction.transaction.tx_date}
                                    price={transaction.transaction.price}
                                    motion={transaction.transaction.motion}
                                    description={transaction.transaction.description}
                                    user={transaction.user}
                                />
                            )
                        }
                    </ul>
            </div>
        </div>
    );
}

export default FullVerifiedTransactionComponent;