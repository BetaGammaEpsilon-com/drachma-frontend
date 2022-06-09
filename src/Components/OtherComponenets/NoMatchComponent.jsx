import React from "react";
import { Link } from "react-router-dom";
import TitleComponent from './TitleComponent';

// Screen to go to whne an undeclared route is accessed by the user
const NoMatchComponent = () => {

    return (
        <div>
            <TitleComponent />
            <div className='grid justify-center'>
                <p className='text-6xl py-10'>page not found</p>
                <Link to='/' className='text-center text-4xl my-10 hover:border-2 hover:text-honor-300 rounded-lg'>return home</Link>
            </div>
        </div>
    )
}

export default NoMatchComponent