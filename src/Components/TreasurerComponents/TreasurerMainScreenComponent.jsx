import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TransactionComponent from './TransactionComponent';

const TreasurerMainScreenComponent = () => {

    const [transactionsTotal, setTransactionsTotal] = useState(0);
    const [transactionsVerifiedTotal, setTransactionsVerifiedTotal] = useState(0);
    const [transactionsUnverifiedTotal, setTransactionsUnverifiedTotal] = useState(0);
    const [transactionsVerifiedList, setTransactionsVerifiedList] = useState([]);
    const [transactionsUnverifiedList, setTransactionsUnverifiedList] = useState([]);

    const [usersList, setUsersList] = useState([]);

    const [transactionReport, setTransactionReport] = useState({});

    useEffect(() => {
        const fetchTransactions = async() => {
            const result = await axios(
                "http://192.168.69.134:5000/tres"
            );

            let returnedData = result.data;

            setTransactionsTotal(returnedData.total);
            setTransactionsVerifiedTotal(returnedData.verified_total);
            setTransactionsUnverifiedTotal(returnedData.unverified_total);
            setTransactionsVerifiedList(returnedData.verified_tx);
            setTransactionsUnverifiedList(returnedData.unverified_tx);
            setUsersList(returnedData.users);
        }
    
        fetchTransactions();
      }, []);

    return (
        <div>
            <h3>Treasurer View</h3>
            <p>Total: {transactionsTotal}</p>
            <p>Unverified Transactions: </p>
            <p>Unverified Total: {transactionsUnverifiedTotal}</p>
            <ul>
                {
                    transactionsUnverifiedList.map(transaction => 
                        <TransactionComponent 
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
            <p>Verified Transactions:</p>
            <p>Verified Total: {transactionsVerifiedTotal}</p>
            <p>Verified Transactions: </p>
            <ul>
                {
                    transactionsVerifiedList.map(transaction => 
                        <TransactionComponent 
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
    );
}

export default TreasurerMainScreenComponent;