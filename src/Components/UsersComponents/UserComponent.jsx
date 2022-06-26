import React from "react";
import { Link } from "react-router-dom"

// subcomponent for rendering user info
const UserComponent = (props) => {

    const balanceFormatted = props.balance.toFixed(2);
    
    return (
        <li className='grid grid-cols-3 justify-items-center py-2'>
            <p className='lowercase'>{props.name}</p>
            <p>{`$${balanceFormatted}`}</p>
            <Link
                to={`/users/${props.uid}`}
                className='justify-self-center outline rounded-md h-6 px-5 hover:text-honor-300'>
                    view
            </Link>
        </li>
    );
}

export default UserComponent;