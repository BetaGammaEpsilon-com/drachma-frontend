import React from "react";

const UsersDropdownComponent = (props) => {

    return (
        <select 
            className='text-loyalty lowercase h-9 indent-1 w-full' 
            onChange={(e) => props.onChange(e)}
            value={props.value}>
                    
                {
                    props.users.map((user) =>
                        <option key={user.uid} value={user.uid}>{user.name}</option>  
                    )
                }
        </select>
    );
}

export default UsersDropdownComponent