import React, {useState, useEffect} from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TitleComponent from "../OtherComponenets/TitleComponent";

const TreasurerReport = () => {

    const [transactionReport, setTransactionReport] = useState("");

    useEffect(() => {
        const fetchReport = async() => {
            const result = await axios(
                "http://192.168.69.134:5000/tres/report"
            );
            setTransactionReport(result.data.report);
        }

        fetchReport();
    })

    return (
        <div>
            <TitleComponent />
            <ReactMarkdown children={transactionReport} remarkPlugins={[remarkGfm]}/>
        </div>
    );
}

export default TreasurerReport;