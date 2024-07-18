import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="bg-[url('/images/bgZid.jpg')] bg-cover bg-center bg-fixed">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
