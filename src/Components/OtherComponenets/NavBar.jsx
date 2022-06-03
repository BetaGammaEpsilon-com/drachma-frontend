import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className='flex text-center justify-between px-10 col-span-6 py-14 font-semibold'>
            <div className='hover:text-yellow-500'>
                Import
            </div>
            <div className='hover:text-yellow-500'>
                Export
            </div>
            <div className='hover:text-yellow-500'>
                Transact
            </div>
            <Link className='hover:text-yellow-500' to='/report'>Report</Link>
            <div className='hover:text-yellow-500'>
                Users
            </div>
        </div>
    );
}

export default NavBar;