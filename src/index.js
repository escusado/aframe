// import React from "react";
// import ReactDOM from "react-dom";
// import ViewMain from "./lib/view-main";
import Aframe from "aframe";
//
var req = require.context("./lib/components", true, /^(.*\.(js$))[^.]*$/im);
req.keys().forEach(function(key){
    req(key);
});
//
// // window.Socket = io();
//
// ReactDOM.render(<ViewMain name="wat"/>, document.querySelector("#root"));

import ViewMain from "./lib/view-main-vanilla";


const App = class App {
  constructor () {
    this.el = ((new DOMParser()).parseFromString('<div class="app"></div>', 'text/html')).body.firstChild;
  }

  render(el) {
    el.appendChild(this.el);
  }
}

const app = new App();
const viewMain = new ViewMain();
app.render(document.querySelector("#root"));
// viewMain.render(app.el);
const tmpEl = document.createElement("div");
tmpEl.appendChild(viewMain.el)
app.el.innerHTML = tmpEl.innerHTML;
