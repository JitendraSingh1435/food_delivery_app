import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./App";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { StateProviders } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StateProviders initialState={initialState} reducer={reducer}>
      <App />
    </StateProviders> 
  </Router>
);

// ReactDOM.createRoot.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );
