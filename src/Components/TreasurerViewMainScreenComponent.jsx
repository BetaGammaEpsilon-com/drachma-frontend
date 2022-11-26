import React from "react";
import TreasurerMainScreenComponent from "./TreasurerComponents/TreasurerMainScreenComponent";
import TitleComponent from "./OtherComponents/TitleComponent";

const TreasurerViewMainScreenComponent = () => {
    return (
        <div>
            <TitleComponent />    
            <TreasurerMainScreenComponent />  
        </div> 
    );
}

export default TreasurerViewMainScreenComponent;