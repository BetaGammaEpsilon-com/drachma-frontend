import React, { useEffect, useState } from "react";
import axios from 'axios';
import TitleComponent from "../OtherComponenets/TitleComponent";
import UserHeaderComponent from "./UserHeaderComponent";
import UserComponent from "./UserComponent";
import NewUserComponent from "./NewUserComponent";

// navigation for all things users
const UsersMainScreenComponent = () => {

    const ZebIP = 'http://127.0.0.1:5000/user';

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async() => {
            const result = await axios(ZebIP);

            setUsers(result.data);
        }

        fetchUsers();
    }, [])

    return (
        <div>
            <TitleComponent />
            <div className='p-5 grid grid-cols-2 grid-flow-row'>
                <div className='col-start-1 border-2'>
                    <UserHeaderComponent/>
                    <ul className='pt-2'>
                    {
                        users.sort((a, b) => parseFloat(b.balance) - parseFloat(a.balance)).map((user) => 
                        <UserComponent
                            key={user.uid}
                            uid={user.uid}
                            name={user.name}
                            balance={user.balance}
                        />)
                    }
                    </ul>
                </div>
                <div className='col-start-2 ml-10'>
                    <NewUserComponent />
                </div>
            </div>
        </div>
    );
}

export default UsersMainScreenComponent;