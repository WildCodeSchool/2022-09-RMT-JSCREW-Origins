import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import User from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <User.UserProvider>
      <App />
    </User.UserProvider>
  </React.StrictMode>
);
