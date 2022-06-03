import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className='flex text-center justify-between px-10 col-span-6 py-14 font-semibold'>
            <div>
                Import
            </div>
            <div>
                Export
            </div>
            <div>
                Transact
            </div>
            <Link to='/report'>Report</Link>
            <div>
                Users
            </div>
        </div>
    )
}

export default NavBar;