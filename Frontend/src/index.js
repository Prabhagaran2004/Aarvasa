import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import Main from "./Main"; // Import Main which holds the router configuration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main /> {/* Rendering Main component */}
  </React.StrictMode>
);