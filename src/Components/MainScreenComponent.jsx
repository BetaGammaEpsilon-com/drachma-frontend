import React from "react";
import TreasurerMainScreenComponent from "./TreasurerComponents/TreasurerMainScreenComponent";
import TitleComponent from "./OtherComponenets/TitleComponent";

const MainScreenComponent = () => {
    return (
        <div>
            <TitleComponent />    
            <TreasurerMainScreenComponent />  
        </div> 
    );
}

export default MainScreenComponent;