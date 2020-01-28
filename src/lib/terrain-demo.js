require('aframe-simple-sun-sky');

export default class TerrainDemo {
  constructor(){
    this.el =  `<a-scene>

                  <a-entity position="2 1 4" rotation="-10 30 0">
                    <a-camera></a-camera>
                  </a-entity>

                  <a-entity light="type: directional; color: #FFF; intensity: 1" position="4 7 -1" shadow="cast: true"></a-entity>
                  <a-entity light="type: ambient; color: #BBB" shadow="cast: true; receive: true"></a-entity>

                  <a-box material="roughness: 1; color: red" shadow="cast: true; receive: true"></a-box>

                  <a-plane position="0 0 0" rotation="-90 0 0" width="500" height="500" material="roughness: 1; color: #FFF" shadow="receive: true"></a-plane>
                </a-scene>`;
  }
};


// <a-simple-sun-sky sun-position="0.7 0.4 -1"></a-simple-sun-sky>
/////
//

// <a-assets>
// <a-asset-item id="tank" src="src/obj/micro_tank_out/micro_tank.gltf"></a-asset-item>
// </a-assets>
// <a-entity gltf-model="#tank"></a-entity>
