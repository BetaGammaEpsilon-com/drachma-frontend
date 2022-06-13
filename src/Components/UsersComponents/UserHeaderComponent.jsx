import React from "react";

// header view for the users
const UserHeaderComponent = () => {

    return (
        <div className='grid grid-cols-3 justify-items-center mt-2 border-b'>
            <p>name</p>
            <p>balance</p>
            <p>action</p>
        </div>
    );
}

export default UserHeaderComponent;