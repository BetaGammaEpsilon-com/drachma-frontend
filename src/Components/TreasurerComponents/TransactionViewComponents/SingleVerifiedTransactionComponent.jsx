import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../../OtherComponenets/TitleComponent";

// handles the view for looking at a single verified transaction
    // TODO:
        // implement put request for changing information about this transaction
const SingleVerifiedTransactionComponent = () => {

    let params = useParams();
    let transactionId = params.txid;

    const ZebIPTransactionURL = `http://127.0.0.1:5000/tres/tx/${transactionId}`;

    const [date, setDate] = useState("");
    const [motion, setMotion] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [username, setUsername] = useState("");

    const handleDeleteTransaction = () => {
        const confirmation = window.confirm("Are you sure you want to delete this transaction?");
        if (confirmation) {
            deleteTransaction();
        }
    }

    const deleteTransaction = async() => {
            const result = await axios.delete(ZebIPTransactionURL)
            .catch(error => alert(error));

            window.location.reload();
    }

    let navigate = useNavigate();
    
    useEffect(() => {
        const fetchTransaction = async() => {
            const result = await axios(ZebIPTransactionURL)
            .catch(error => navigate('*'));
            
            let returnedTransaction = result.data.transaction;
            let returnedUser = result.data.user;

            setDate(returnedTransaction.tx_date.substring(0, 10));
            setDescription(returnedTransaction.description);
            setMotion(returnedTransaction.motion);
            setPrice(returnedTransaction.price);
            setUsername(returnedUser.name);
        }

        fetchTransaction();
    }, []);

    return (
        <div>
            <TitleComponent />
            <div className='grid grid-cols-7 grid-flow-row py-5 px-5 gap-4'>
                <p className='col-span-3 col-start-1 row-start-1'>user:</p>
                <input className='col-span-5 col-start-3 row-start-1 text-loyalty lowercase' value={username}></input>
                <p className='col-span-3 col-start-1 row-start-2'>date:</p>
                <input 
                    className='col-span-5 col-start-3 row-start-2 text-loyalty' 
                    value={date}
                    type='date'
                    onChange={e => setDate(e.target.value)}>
                </input>
                <p className='col-span-3 col-start-1 row-start-3'>motion:</p>
                <input 
                    className='col-span-5 col-start-3 row-start-3 text-loyalty' 
                    value={motion}
                    type='text'
                    onChange={e => setMotion(e.target.value)}>
                </input>
                <p className='col-span-3 col-start-1 row-start-4'>price:</p>
                <input 
                    className='col-span-5 col-start-3 row-start-4 text-loyalty' 
                    value={price}
                    type='number'
                    onChange={e => setPrice(e.target.value)}>
                </input>
                <p className='col-span-3 col-start-1 row-start-5'>description:</p>
                <input 
                    className='col-span-5 col-start-3 row-start-5 text-loyalty lowercase' 
                    value={description}
                    type='text'
                    onChange={e => setDescription(e.target.value)}>
                </input>
                <button 
                    className='col-start-7 row-start-7 outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'>
                        modify
                </button>
                <button 
                    className='col-start-6 row-start-7 outline rounded-md h-6 px-5 hover:outline-crimson hover:text-crimson'
                    onClick={handleDeleteTransaction}>
                        delete
                </button>
            </div>
        </div>
    );

}

export default SingleVerifiedTransactionComponent;