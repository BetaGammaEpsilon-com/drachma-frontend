import React, { useState, useEffect } from "react";
import axios from "axios";
import TitleComponent from "../OtherComponents/TitleComponent";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Multiselect from 'multiselect-react-dropdown';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MotionsDropDownComponent from "../OtherComponents/MotionsDropDownComponent";

// home screen for making a new transaction
const TransactMainScreenComponent = () => {

    const ZebUsersIP = 'http://127.0.0.1:5000/user';
    const ZebTransactionsIP = 'http://127.0.0.1:5000/tres/tx';
    const ZebMotionsIP = 'http://127.0.0.1:5000/tres/motions';

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [price, setPrice] = useState(0);
    const [motion, setMotion] = useState("");
    const [description, setDescription] = useState("");

    const [usersList, setUsersList] = useState([]);
    const [motions, setMotions] = useState([]);

    const [alertOpen, setAlertOpen] = useState(false);

    const [split, setSplit] = useState(false);

    const theme = createTheme({
        palette: {
          primary: {
            main: "#F2A74B",
          },
        },
    });
    
    useEffect(() => {

        const fetchUsers = async() => {
            const result = await axios(ZebUsersIP);
            setUsersList(result.data);
        }

        const fetchMotions = async() => {
            const result = await axios(ZebMotionsIP)
            .catch(error => console.error(error));
            
            setMotions(result.data);
            setMotion(result.data[0].motion);
        }

        fetchUsers();
        fetchMotions();
    }, []);

    const handleSwitchChange = (e) => {
        setSplit(e.target.checked);
    }

    const handleUserSubmit = () => {
        if (selectedUsers === [] || price === 0 || motion === "" || description === "") {
            alert("fill out all fields");
        }
        else {
            addTransactions();
        }
    }

    const multiselectStyles = {
        chips: {
            background: "#273240"
        }
    }

    const addTransactions = async() => {
        let splitPrice = price;
        if (split) {
            splitPrice = splitPrice / selectedUsers.length;
        }
        for(let i = 0; i < selectedUsers.length; i++) {
            let currUser = selectedUsers[i];
            let newTransaction = {
                uid: currUser.uid,
                price: splitPrice,
                motion: motion,
                description: description
            };
            await axios.post(ZebTransactionsIP, newTransaction)
            .catch(error => console.error(error));
        }
        setAlertOpen(true);
        setTimeout(() => window.location.reload(), 1000);
    }

    const handleAlertClose = () => {
        setAlertOpen(false);
    }

    const handleUserSelectChange = (selectedList, selectedItem) => {
        setSelectedUsers(selectedList);
    }

    const onMotionChange = (e) => {
        setMotion(e.target.value);
    }

    return (
        <div>
            <TitleComponent /> 
            <form className='p-5 grid grid-cols-7 gap-4'>
                <p className='row-start-1 col-start-1 col-span-3'>user:</p>
                <div className='row-start-1 col-start-3 col-span-5 lowercase text-loyalty bg-offwhite'>
                    <Multiselect
                        placeholder='select user(s)'
                        options={usersList}
                        displayValue='name'
                        onSelect={(l, i) => handleUserSelectChange(l, i)}
                        onRemove={(l, i) => handleUserSelectChange(l, i)}
                        style={multiselectStyles}
                    />
                </div>
                <p className='row-start-2 col-start-1 col-span-3'>price:</p>
                <input
                    className='row-start-2 col-start-3 col-span-5 lowercase text-loyalty h-9 indent-1'
                    type='number'
                    placeholder='enter price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <p className='row-start-3 col-start-1 col-span-3'>motion:</p>
                <div className='row-start-3 col-start-3 col-span-5'>
                    <MotionsDropDownComponent value={motion} onChange={onMotionChange} motions={motions} />
                </div>
                <p className='row-start-4 col-start-1 col-span-3'>description:</p>
                <input
                    className='row-start-4 col-start-3 col-span-5 lowercase text-loyalty h-9 indent-1'
                    type='text'
                    placeholder='enter description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <div className='row-start-5 col-start-6 col-span-2 justify-self-end'>
                    <label>
                        Split charge among all users?
                        <ThemeProvider theme={theme}>
                            <Switch checked={split} onChange={handleSwitchChange}></Switch>
                        </ThemeProvider>
                    </label>
                </div>
                <button
                    className='row-start-6 col-start-7 justify-self-end outline rounded-md h-6 px-5 hover:text-honor-300'
                    type='button'
                    onClick={handleUserSubmit}
                >
                        submit
                </button>
            </form>
            <Snackbar
                open={alertOpen}
                severity="info"
                autoHideDuration={4000}
                onClose={handleAlertClose}
                key={'bottomleft'}
            >
                <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
                    transaction sucessfully made!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default TransactMainScreenComponent;