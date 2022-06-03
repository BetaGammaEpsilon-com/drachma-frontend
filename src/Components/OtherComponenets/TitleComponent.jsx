import React from "react";
import NavBar from "./NavBar";
import logo from './../../logo.svg';
import { Link } from "react-router-dom";

const TitleComponent = () => {

    return (
        <div className='grid grid-cols-8 border-8 justify-between'>
            <img src={logo} className="col-span-1" />
            <Link to='/' className='text-4xl font-bold my-5 col-span-1 py-6'>Drachma</Link>
            <NavBar />
        </div>
    )
}

export default TitleComponent;