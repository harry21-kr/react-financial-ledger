import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentHistoryProvider from "./contexts/PaymentHistory/Provider";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaymentHistoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:listId" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </PaymentHistoryProvider>
  </React.StrictMode>
);
