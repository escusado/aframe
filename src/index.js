import Aframe from "aframe";

// Bring all components no matter what! ⚙️⚙️⚙️
var req = require.context("./lib/components", true, /^(.*\.(js$))[^.]*$/im);
req.keys().forEach(function(key){
    req(key);
});

import RainbowWave from "./lib/rainbow-wave";
import TerrainDemo from "./lib/terrain-demo";
import BasicDemo from "./lib/basic-demo";

const App = class App {
  constructor () {
    this.el = ((new DOMParser()).parseFromString('<div class="app"></div>', 'text/html')).body.firstChild;
  }

  render(el) {
    el.appendChild(this.el);
  }
}

const app = new App();
app.render(document.querySelector("#root"));
const tmpEl = document.createElement("div");

// const rainbowWave = new RainbowWave();
// tmpEl.appendChild(rainbowWave.el);

// const terrainDemo = new TerrainDemo();
// app.el.innerHTML = terrainDemo.el;

const basicDemo = new BasicDemo();
app.el.innerHTML = basicDemo.el;
