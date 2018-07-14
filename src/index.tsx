/// <reference path="./def/images.d.ts" />
/// <reference path="./def/material-ui.d.ts" />
/// <reference path="./def/react-popper.d.ts" />
/// <reference path="./def/react-selectable.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render((
    <BrowserRouter basename="element">
        <App />
    </BrowserRouter>),
    document.getElementById("root") as HTMLElement
);
