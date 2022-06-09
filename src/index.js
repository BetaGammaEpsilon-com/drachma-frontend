import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TreasurerReport from "./Components/ReportComponents/TreasurerReport";
import './index.css'
import MotionsMainScreenComponent from "./Components/MotionComponents/MotionsMainScreenComponent";
import NoMatchComponent from "./Components/OtherComponenets/NoMatchComponent";
import FullVerifiedTransactionComponent from "./Components/TreasurerComponents/TransactionViewComponents/FullVerifiedTransactionsComponent";
import SingleTransactionComponent from "./Components/TreasurerComponents/TransactionViewComponents/SingleTransactionComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='report' element={<TreasurerReport/>} />
      <Route path='motions' element={<MotionsMainScreenComponent />} />
      <Route path='verified' element={<FullVerifiedTransactionComponent />} />
      <Route path=':txid' element={<SingleTransactionComponent />} />
      <Route path='*' element={<NoMatchComponent / >} />
    </Routes>
  </BrowserRouter>
);