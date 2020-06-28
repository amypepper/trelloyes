import React from "react";
import ReactDOM from "react-dom";
import STORE from "./store";
import "./index.css";

import App from "./App";

ReactDOM.render(<App store={STORE} />, document.getElementById("root"));
