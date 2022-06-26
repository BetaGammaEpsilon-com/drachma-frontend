import React from "react";
import TreasurerMainScreenComponent from "./TreasurerComponents/TreasurerMainScreenComponent";
import TitleComponent from "./OtherComponenets/TitleComponent";

const TreasurerViewMainScreenComponent = () => {
    return (
        <div>
            <TitleComponent />    
            <TreasurerMainScreenComponent />  
        </div> 
    );
}

export default TreasurerViewMainScreenComponent;