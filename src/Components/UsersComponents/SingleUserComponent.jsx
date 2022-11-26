import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import TitleComponent from "./../OtherComponents/TitleComponent";
import TransactionHeaderComponent from "../TreasurerComponents/TransactionViewComponents/TransactionHeaderComponent";
import VerifiedTransactionComponent from "../TreasurerComponents/TransactionViewComponents/VerifiedTransactionComponent";
import UnverifiedTransactionComponent from "../TreasurerComponents/TransactionViewComponents/UnverifiedTransactionComponent";

// information about a user
const SingleUserComponent = () => {

    const params = useParams();
    const userId = params.uid;
    const navigate = useNavigate();

    const requestUrl = process.env.REACT_APP_BASE_URL + `user/${userId}`;

    const [balance, setBalance] = useState("");
    const [name, setName] = useState("");
    const [verifiedTransactions, setVerifiedTransactions] = useState([]);
    const [unverifiedTransactions, setUnverifiedTransactions] = useState([]);

    useEffect(() => {
        const fetchUser = async() => {
            const result = await axios(requestUrl)
            .catch(error => navigate('*'))

            let returnedData = result.data;

            setBalance(returnedData.balance);
            setName(returnedData.name);
            setVerifiedTransactions(returnedData.tx.verified);
            setUnverifiedTransactions(returnedData.tx.unverified);
        }

        fetchUser();
    }, [navigate, requestUrl]);

    return (
        <div>
            <TitleComponent />
            <div className='grid grid-cols-9 grid-flow-row py-5 px-5'>
                <div className='col-span-5 row-start-1 col-start-1'>
                    <p className='text-2xl font-semibold'>unverified transactions: </p>
                    <TransactionHeaderComponent />
                    <ul className='list-none'>
                        {
                            unverifiedTransactions.map(transaction => 
                                <UnverifiedTransactionComponent 
                                    key={transaction.txid}
                                    transactionId={transaction.txid}
                                    date={transaction.tx_date}
                                    price={transaction.price}
                                    motion={transaction.motion}
                                    description={transaction.description}
                                    user={name}
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
                            verifiedTransactions.map(transaction => 
                                <VerifiedTransactionComponent 
                                    key={transaction.txid}
                                    transactionId={transaction.txid}
                                    date={transaction.tx_date}
                                    price={transaction.price}
                                    motion={transaction.motion}
                                    description={transaction.description}
                                    user={name}
                                />
                            )
                        }
                    </ul>
                </div>
                <div className='col-span-3 row-span-all row-start-1 col-start-7'>
                    <div className='grid grid-cols-2 grid-rows-none text-2xl lowercase font-semibold'>
                        <p>{`${name} balance:`}</p>
                        <p>${balance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleUserComponent;