import React from "react";
import { Link } from "react-router-dom";

// Navigation Bar
const NavBar = () => {

    return (
        <div className='flex text-center justify-around px-10 col-span-6 py-14 font-semibold'>
            <div className='hover:text-honor-300'>
                import
            </div>
            <div className='hover:text-honor-300'>
                export
            </div>
            <div className='hover:text-honor-300'>
                transact
            </div>
            <Link className='hover:text-honor-300' to='/report'>report</Link>
            <Link className='hover:text-honor-300' to='/motions'>motions</Link>
            <Link className='hover:text-honor-300' to='/users'>users</Link>
        </div>
    );
}

export default NavBar;