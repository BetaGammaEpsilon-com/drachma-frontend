import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../../OtherComponenets/TitleComponent";
import UsersDropdownComponent from "../../OtherComponenets/UsersDropdownComponent";
import MotionsDropDownComponent from "../../OtherComponenets/MotionsDropDownComponent";

// handles the view for looking at a single verified transaction
    // TODO:
        // implement put request for changing information about this transaction
const SingleVerifiedTransactionComponent = () => {

    let params = useParams();
    let transactionId = params.txid;

    const ZebIPTransactionURL = `http://127.0.0.1:5000/tres/tx/${transactionId}`;
    const ZebIPUsersURL = 'http://127.0.0.1:5000/user';
    const ZebIPMotionsURL = 'http://127.0.0.1:5000/tres/motions';

    const [date, setDate] = useState("");
    const [motion, setMotion] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [userID, setUserID] = useState(0);

    const [users, setUsers] = useState([]);
    const [motions, setMotions] = useState([]);

    const handleDeleteTransaction = () => {
        const confirmation = window.confirm("Are you sure you want to permanently delete this transaction?");
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
            setUserID(returnedUser.uid);
        }

        const fetchUsers = async() => {
            const result = await axios(ZebIPUsersURL)
            .catch(error => console.error(error));

            setUsers(result.data);
        }

        const fetchMotions = async() => {
            const result = await axios(ZebIPMotionsURL)
            .catch(error => console.error(error));
            
            setMotions(result.data);
        }

        fetchTransaction();
        fetchUsers();
        fetchMotions();
    }, []);

    const onUserChange = (e) => {
        setUserID(e.target.value);
    }

    const onMotionChange = (e) => {
        setMotion(e.target.value);
    }

    return (
        <div>
            <TitleComponent />
            <div className='grid grid-cols-7 grid-flow-row py-5 px-5 gap-4'>
                <p className='col-span-3 col-start-1 row-start-1'>user:</p>
                <div className='col-span-5 col-start-3 row-start-1'>
                    <UsersDropdownComponent users={users} onChange={onUserChange} value={userID}/>   
                </div>
                <p className='col-span-3 col-start-1 row-start-2'>date:</p>
                <input 
                    className='col-span-5 col-start-3 row-start-2 text-loyalty h-9 indent-1' 
                    value={date}
                    type='date'
                    onChange={e => setDate(e.target.value)}>
                </input>
                <p className='col-span-3 col-start-1 row-start-3'>motion:</p>
                <div className='col-span-5 col-start-3 row-start-3'>
                    <MotionsDropDownComponent motions={motions} onChange={onMotionChange} />
                </div>
                <p className='col-span-3 col-start-1 row-start-4'>price:</p>
                <input 
                    className='col-span-5 col-start-3 row-start-4 text-loyalty h-9 indent-1' 
                    value={price}
                    type='number'
                    onChange={e => setPrice(e.target.value)}>
                </input>
                <p className='col-span-3 col-start-1 row-start-5'>description:</p>
                <input 
                    className='col-span-5 col-start-3 row-start-5 text-loyalty lowercase h-9 indent-1' 
                    value={description}
                    type='text'
                    onChange={e => setDescription(e.target.value)}>
                </input>
                <button 
                    className='col-start-7 row-start-7 outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'>
                        modify
                </button>
                <button 
                    className='col-start-6 row-start-7 outline rounded-md h-6 px-5 hover:outline-sacrafice hover:text-sacrafice'
                    onClick={handleDeleteTransaction}>
                        delete
                </button>
            </div>
        </div>
    );

}

export default SingleVerifiedTransactionComponent;