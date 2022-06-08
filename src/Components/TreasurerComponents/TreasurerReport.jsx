import React, {useState, useEffect} from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TitleComponent from "../OtherComponenets/TitleComponent";

const TreasurerReport = () => {

    const JoshIP = "http://192.168.69.109:5000/tres/report";
    const RobbieIP = "http://192.168.69.134:5000/tres/report";
    const ZebIP = "http://127.0.0.1:5000/tres/report"

    const [transactionReport, setTransactionReport] = useState("");

    useEffect(() => {
        const fetchReport = async() => {
            const result = await axios(
                ZebIP
            );
            console.log(result.data)
            setTransactionReport(result.data.report);
        }

        fetchReport();
    })

    return (
        <div>
            <TitleComponent />
            <ReactMarkdown className='px-5 py-5' remarkPlugins={[remarkGfm]} children={transactionReport} />
        </div>
    );
}

export default TreasurerReport;