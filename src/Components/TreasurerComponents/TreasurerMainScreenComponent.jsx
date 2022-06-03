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
        <div className='grid grid-cols-8 grid-rows-6 py-5 px-5'>
            <div className='col-span-5 row-span-3 col-start-1 row-start-1'>
                <p className='text-2xl font-semibold underline'>Verified Transactions:</p>
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
            <div className='col-span-5 row-span-3 row-start-4 col-start-1'>
                <p className='text-2xl font-semibold underline'>Unverified Transactions: </p>
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
            </div>
            <div className='col-span-3 row-span-all row-start-1 col-start-6'>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>Total:</p>
                    <p>{transactionsTotal}</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>Verified Total:</p>
                    <p>{transactionsVerifiedTotal}</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>Unverified Total:</p>
                    <p>{transactionsUnverifiedTotal}</p>
                </div>
            </div>
        </div>
    );
}

export default TreasurerMainScreenComponent;