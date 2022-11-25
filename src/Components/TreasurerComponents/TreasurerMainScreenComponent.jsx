import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VerifiedTransactionComponent from './TransactionViewComponents/VerifiedTransactionComponent';
import UnverifiedTransactionComponent from './TransactionViewComponents/UnverifiedTransactionComponent';
import TransactionHeaderComponent from './TransactionViewComponents/TransactionHeaderComponent';

// Main treasurer home screen to view transactions
const TreasurerMainScreenComponent = () => {

    const requestUrl = process.env.REACT_APP_BASE_URL + 'tres';

    const [transactionsTotal, setTransactionsTotal] = useState(0);
    const [transactionsVerifiedTotal, setTransactionsVerifiedTotal] = useState(0);
    const [transactionsUnverifiedTotal, setTransactionsUnverifiedTotal] = useState(0);
    const [transactionsVerifiedList, setTransactionsVerifiedList] = useState([]);
    const [transactionsUnverifiedList, setTransactionsUnverifiedList] = useState([]);

    useEffect(() => {
        const fetchTransactions = async() => {
            const result = await axios(
                requestUrl
            );
            
            let returnedData = result.data;

            setTransactionsTotal(returnedData.total);
            setTransactionsVerifiedTotal(returnedData.verified_total);
            setTransactionsUnverifiedTotal(returnedData.unverified_total);
            setTransactionsVerifiedList(returnedData.verified_tx);
            setTransactionsUnverifiedList(returnedData.unverified_tx);
        }
    
        fetchTransactions();
      }, [requestUrl]);

    return (
        <div className='grid grid-cols-9 grid-flow-row py-5 px-5'>
            <div className='col-span-5 row-start-1 col-start-1'>
                <p className='text-2xl font-semibold'>unverified transactions: </p>
                <TransactionHeaderComponent />
                <ul className='list-none'>
                    {
                        transactionsUnverifiedList.map(transaction => 
                            <UnverifiedTransactionComponent 
                                key={transaction.transaction.txid}
                                transactionId={transaction.transaction.txid}
                                userId={transaction.transaction.uid}
                                date={transaction.transaction.tx_date}
                                price={transaction.transaction.price}
                                motion={transaction.transaction.motion}
                                description={transaction.transaction.description}
                                user={transaction.user.name}
                            />
                        )
                    }
                </ul>
            </div>
            <div className='col-span-5 col-start-1 row-start-2 py-10'>
                <p className='text-2xl font-semibold'>verified transactions:</p>
                <TransactionHeaderComponent />
                <ul className='list-none'>
                    {
                        transactionsVerifiedList.slice(0,5).map(transaction => 
                            <VerifiedTransactionComponent 
                                key={transaction.transaction.txid}
                                transactionId={transaction.transaction.txid}
                                userId={transaction.transaction.uid}
                                date={transaction.transaction.tx_date}
                                price={transaction.transaction.price}
                                motion={transaction.transaction.motion}
                                description={transaction.transaction.description}
                                user={transaction.user.name}
                            />
                        )
                    }
                </ul>
                <div className='py-10'>
                    <Link to='/verified' className='italic hover:text-honor-300'>view all</Link>
                </div>
            </div>
            <div className='col-span-3 row-span-all row-start-1 col-start-7'>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>total:</p>
                    <p>${transactionsTotal.toFixed(2)}</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>unverified total:</p>
                    <p>${transactionsUnverifiedTotal.toFixed(2)}</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>verified total:</p>
                    <p>${transactionsVerifiedTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default TreasurerMainScreenComponent;