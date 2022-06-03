import React from "react";
import NavBar from "./OtherComponenets/NavBar";
import TreasurerMainScreenComponent from "./TreasurerComponents/TreasurerMainScreenComponent";
import logo from './../logo.svg';

const MainScreenComponent = () => {
    return (
        <div>
            <div className='grid grid-cols-8 border-8 justify-between'>
            <img src={logo} className="col-span-1" />
                <h1 className='text-4xl font-bold my-5 col-span-1 py-6'>Drachma</h1>
                <NavBar />
            </div>
            <TreasurerMainScreenComponent />
        </div>
    )
}

export default MainScreenComponent;