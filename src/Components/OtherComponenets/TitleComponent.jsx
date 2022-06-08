import React from "react";
import NavBar from "./NavBar";
import logo from './../../Assets/drachma-logo-austin-white-notext.svg'
import { Link } from "react-router-dom";

const TitleComponent = () => {

    return (
        <div className='grid grid-cols-8 border-b-2 justify-between'>
            <img src={logo} className="col-span-1 h-28 pt-5 px-10" />
            <Link to='/' className='text-4xl font-bold my-5 col-span-1 py-6'>drachma</Link>
            <NavBar />
        </div>
    );
}

export default TitleComponent;