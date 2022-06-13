import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TreasurerReport from "./Components/ReportComponents/TreasurerReport";
import './index.css'
import MotionsMainScreenComponent from "./Components/MotionComponents/MotionsMainScreenComponent";
import NoMatchComponent from "./Components/OtherComponenets/NoMatchComponent";
import FullVerifiedTransactionComponent from "./Components/TreasurerComponents/TransactionViewComponents/FullVerifiedTransactionsComponent";
import SingleVerifiedTransactionComponent from "./Components/TreasurerComponents/TransactionViewComponents/SingleVerifiedTransactionComponent";
import UsersMainScreenComponent from "./Components/UsersComponents/UsersMainScreenComponent"
import SingleUnverifiedTransactionComponent from "./Components/TreasurerComponents/TransactionViewComponents/SingleUnverifiedTransactionComponent";
import SingleUserComponent from "./Components/UsersComponents/SingleUserComponent";
import TransactMainScreenComponent from "./Components/TransactComponents/TransactMainScreenComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='report' element={<TreasurerReport/>} />
      <Route path='motions' element={<MotionsMainScreenComponent />} />
      <Route path='users' element={<UsersMainScreenComponent />} />
      <Route path='users/:uid' element={<SingleUserComponent />} />
      <Route path='users/:uid/*' element={<UsersMainScreenComponent />} />
      <Route path='transact' element={<TransactMainScreenComponent />} />
      <Route path='verified' element={<FullVerifiedTransactionComponent />} />
      <Route path='verified/:txid' element={<SingleVerifiedTransactionComponent />} />
      <Route path='verified/:txid/*' element={<App />} />
      <Route path='unverified/:txid' element={<SingleUnverifiedTransactionComponent />} />
      <Route path='unverified/:txid/*' element={<App />} />
      <Route path='*' element={<NoMatchComponent / >} />
    </Routes>
  </BrowserRouter>
);