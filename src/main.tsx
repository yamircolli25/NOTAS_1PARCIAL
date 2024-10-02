import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
