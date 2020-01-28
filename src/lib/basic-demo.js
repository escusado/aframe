require('aframe-simple-sun-sky');

export default class TerrainDemo {
  constructor(){
    this.el =  `<a-scene>

                  <a-entity position="2 1 4" rotation="-10 30 0">
                    <a-camera></a-camera>
                  </a-entity>

                  <a-box material="color: red"></a-box>

                </a-scene>`;
  }
};
