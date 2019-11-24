require('aframe-simple-sun-sky');

export default class TerrainDemo {
  constructor(){
    this.el =  `<a-scene>

                  <a-entity position="0 2 4" >
                    <a-camera></a-camera>
                  </a-entity>

                  <a-simple-sun-sky sun-position="0.7 0.4 -1"></a-simple-sun-sky>
                  <a-entity light="type: ambient; color: #BBB"></a-entity>
                  <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="0.7 0.4 -1" castShadow: true;></a-entity>

                  <a-plane position="0 0 0" rotation="-90 0 0" width="500" height="500" material="roughness: 1; color: #3A3" shadow="cast: true; receive: true"></a-plane>

                  ${this.getElements()}

                </a-scene>`;
  }

  getElements() {
    return `<a-box material="roughness: 1; color: #AA3" shadow="cast: true; receive: true"></a-box>`;
  }
};
