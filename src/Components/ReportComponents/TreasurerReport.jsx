import React, {useState, useEffect} from "react";
import axios from "axios";
import TreasurerReportHeaderComponent from "./TreasurerReportHeaderComponent";
import TreasurerReportRowComponent from "./TreasurerReportRowComponent";

// Main treasurer report screen
// Navigation from report link
const TreasurerReport = () => {

    const ZebIP = "http://127.0.0.1:5000/user"

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const fetchReport = async() => {
            const result = await axios(
                ZebIP
            );
            setUsersList(result.data);
        }

        fetchReport();
    }, []);

    return (
        <div className='p-5'>
            <div className='grid grid-cols-7 grid-flow-row'>
                <div className='col-start-1 col-span-2 row-start-1'>
                    <TreasurerReportHeaderComponent />
                </div>
                <ul className='col-start-1 col-span-2 row-start-2'>
                    {
                        usersList.filter(user => user.balance != 0).map((user) =>
                            <TreasurerReportRowComponent 
                                key={user.uid}
                                name={user.name}
                                balance={user.balance}
                            />
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default TreasurerReport;