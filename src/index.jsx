import React from "react";
import { render } from "react-dom";

import { Home } from "./content/Home";

import "../assets/css/font-awesome.min.css";
import "./index.css";

const App = () => <Home />;

render(<App />, document.getElementById("app"));
