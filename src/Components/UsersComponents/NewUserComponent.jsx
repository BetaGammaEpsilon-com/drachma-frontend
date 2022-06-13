import React, { useState } from "react";
import axios from "axios";

// component for creating new users
const NewUserComponent = () => {

    const ZebIP = 'http://127.0.0.1:5000/user';

    const [nameField, setNameField] = useState("");
    const [balanceField, setBalanceField] = useState(0);

    const createNewUser = async() => {
        const result = await axios.post(ZebIP, {
            name: nameField,
            balance: balanceField
        })
        .catch(error => alert(error))
    }

    return (
        <form>
            <p className='text-2xl pb-4'>New User:</p>
            <div className='grid grid-col-2 grid-flow-row gap-4'>
                <p className='col-start-1 row-start-1'>name:</p>
                <input 
                    className='col-start-2 row-start-1 text-loyalty lowercase'
                    value={nameField}
                    type='text'
                    onChange={e => setNameField(e.target.value)}
                    placeholder='enter user name'>
                </input>
                <p className='col-start-1 row-start-2'>balance:</p>
                <input 
                    className='col-start-2 row-start-2 text-loyalty'
                    value={balanceField}
                    type='number'
                    onChange={e => setBalanceField(e.target.value)}>
                </input>
                <button 
                    type='submit'
                    className='justify-self-end row-start-3 col-start-2 outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'
                    onClick={createNewUser}>
                        submit
                </button>
            </div>
        </form>
    );
}

export default NewUserComponent;