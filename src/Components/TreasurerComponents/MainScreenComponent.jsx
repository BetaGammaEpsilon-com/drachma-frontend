import React from "react";
import TreasurerMainScreenComponent from "./TreasurerMainScreenComponent";
import TitleComponent from "../OtherComponenets/TitleComponent";

const MainScreenComponent = () => {
    return (
        <div>
            <TitleComponent />    
            <TreasurerMainScreenComponent />  
        </div> 
    );
}

export default MainScreenComponent;