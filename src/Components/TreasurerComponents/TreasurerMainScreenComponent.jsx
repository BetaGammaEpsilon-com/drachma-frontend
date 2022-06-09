import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VerifiedTransactionComponent from './TransactionViewComponents/VerifiedTransactionComponent';
import UnverifiedTransactionComponent from './TransactionViewComponents/UnverifiedTransactionComponent';
import TransactionHeaderComponent from './TransactionViewComponents/TransactionHeaderComponent';

// Main treasurer home screen to view transactions
const TreasurerMainScreenComponent = () => {

    const JoshIP = "http://192.168.69.109:5000/tres";
    const RobbieIP = "http://192.168.69.134:5000/tres";
    const ZebIP = "http://127.0.0.1:5000/tres";

    const [transactionsTotal, setTransactionsTotal] = useState(0);
    const [transactionsVerifiedTotal, setTransactionsVerifiedTotal] = useState(0);
    const [transactionsUnverifiedTotal, setTransactionsUnverifiedTotal] = useState(0);
    const [transactionsVerifiedList, setTransactionsVerifiedList] = useState([]);
    const [transactionsUnverifiedList, setTransactionsUnverifiedList] = useState([]);

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const fetchTransactions = async() => {
            const result = await axios(
                ZebIP
            );
            
            let returnedData = result.data;

            console.log(result.data)

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
        <div className='grid grid-cols-9 grid-flow-row py-5 px-5'>
            <div className='col-span-5 row-start-1 col-start-1'>
                <p className='text-2xl font-semibold'>unverified transactions: </p>
                <TransactionHeaderComponent />
                <ul className='list-none'>
                    {
                        transactionsUnverifiedList.map(transaction => 
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
            <div className='col-span-5 col-start-1 row-start-2 py-10'>
                <p className='text-2xl font-semibold'>verified transactions:</p>
                <TransactionHeaderComponent />
                <ul className='list-none'>
                    {
                        transactionsVerifiedList.slice(0,5).map(transaction => 
                            <VerifiedTransactionComponent 
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
                <div className='py-10'>
                    <Link to='/verified' className='italic hover:text-honor-300'>view all</Link>
                </div>
            </div>
            <div className='col-span-3 row-span-all row-start-1 col-start-7'>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>total:</p>
                    <p>${transactionsTotal}</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>verified total:</p>
                    <p>${transactionsVerifiedTotal}</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-none'>
                    <p>unverified total:</p>
                    <p>${transactionsUnverifiedTotal}</p>
                </div>
            </div>
        </div>
    );
}

export default TreasurerMainScreenComponent;