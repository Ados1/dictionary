import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Contexttheme from "./Contexttheme";
import { FontProvider } from "./FontContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contexttheme>
      <FontProvider>
        <App />
      </FontProvider>
    </Contexttheme>
  </React.StrictMode>
);
