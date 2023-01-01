import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StaticRouter location="/Shop">
      <App />
    </StaticRouter>
  </React.StrictMode>
);
