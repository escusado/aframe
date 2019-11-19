import React from "react";
import ReactDOM from "react-dom";
import ViewMain from "./lib/view-main";
import Aframe from "aframe";

var req = require.context("./lib/components", true, /^(.*\.(js$))[^.]*$/im);
req.keys().forEach(function(key){
    req(key);
});

// window.Socket = io();

ReactDOM.render(<ViewMain name="wat"/>, document.querySelector("#root"));
