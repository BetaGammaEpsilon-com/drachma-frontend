import React, { useState, useEffect} from "react";
import axios from "axios";
import TitleComponent from "../../OtherComponenets/TitleComponent";
import TransactionHeaderComponent from "./TransactionHeaderComponent";
import UnverifiedTransactionComponent from "./UnverifiedTransactionComponent";

// fully displays the verfied transactions
const FullVerifiedTransactionComponent = () => {

    const ZebIP = "http://127.0.0.1:5000/tres";

    const [transactionsVerifiedList, setTransactionsVerifiedList] = useState([]);

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const fetchTransactions = async() => {
            const result = await axios(
                ZebIP
            );
            
            let returnedData = result.data;

            console.log(result.data)

            setTransactionsVerifiedList(returnedData.verified_tx);
            setUsersList(returnedData.users);
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
                                <UnverifiedTransactionComponent
                                    key={transaction.txid}
                                    transactionId={transaction.txid}
                                    userId={transaction.uid}
                                    date={transaction.tx_date}
                                    price={transaction.price}
                                    motion={transaction.motion}
                                    description={transaction.description}
                                    user={usersList.filter((user)=> user.uid === transaction.uid)[0]}
                                />
                            )
                        }
                    </ul>
            </div>
        </div>
    );
}

export default FullVerifiedTransactionComponent;