import React, { useState } from "react";
import axios from "axios";

// component for creating new users
const NewUserComponent = () => {

    const requestUrl = process.env.REACT_APP_BASE_URL + 'user';

    const [nameField, setNameField] = useState("");
    const [balanceField, setBalanceField] = useState(0);

    const createNewUser = async() => {

        await axios.post(requestUrl, {
            name: nameField,
            balance: balanceField
        })
        .catch(error => console.error(error))
    }

    const userInputValidations = (e) => {

        if (nameField === "") {
            e.preventDefault();
            alert("enter a name for the user")
        }
        else {
            createNewUser();
        }
    }

    return (
        <form onSubmit={e => userInputValidations(e)}>
            <p className='text-2xl pb-4'>new user:</p>
            <div className='grid grid-col-2 grid-flow-row gap-4'>
                <p className='col-start-1 row-start-1'>name:</p>
                <input 
                    className='col-start-2 row-start-1 text-loyalty lowercase h-9 indent-1'
                    value={nameField}
                    type='text'
                    onChange={e => setNameField(e.target.value)}
                    placeholder='enter user name'>
                </input>
                <p className='col-start-1 row-start-2'>balance:</p>
                <input 
                    className='col-start-2 row-start-2 text-loyalty h-9 indent-1'
                    value={balanceField}
                    type='number'
                    onChange={e => setBalanceField(e.target.value)}>
                </input>
                <button 
                    type='submit'
                    className='justify-self-end row-start-3 col-start-2 outline rounded-md h-6 px-5 hover:outline-honor-300 hover:text-honor-300'>
                        submit
                </button>
            </div>
        </form>
    );
}

export default NewUserComponent;