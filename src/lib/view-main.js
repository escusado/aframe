import React from "react";

export default class ViewMain extends React.Component {
  constructor(){
    super();
    this.boxesQty = 6;
    this.boxSize = 0.2;
    this.margin = 0.1;
  }

  getBoxes() {

    const startPoint = this.boxesQty * -1;

    const boxes = [];

    for(let j=startPoint; j<this.boxesQty; j++) {
      for(let i=startPoint; i<this.boxesQty; i++) {

        const x = (i*this.boxSize) + (i*this.margin);
        const z = (j*this.boxSize) + (j*this.margin);

        const delay = (new THREE.Vector3(0,0,0)).distanceTo(new THREE.Vector3(x,0,z) );

        const box = <a-box
                      key={i+','+j}
                      position={`${x} 0 ${z}`}
                      depth={this.boxSize}
                      height={this.boxSize}
                      width={this.boxSize}
                      color="#4CC3D9"
                      // shadow="cast: true; receive: true"
                      color-changer={"colorSeed: "+ i*j +";"}
                      oscillator={"targetHeight: 3; delay: "+ delay*100 +";"}
                    ></a-box>;

        boxes.push(box);
      }
    }
    // console.log(boxes);
    return boxes;
  }

  render() {
    return  <a-scene>

              <a-entity position="0 2 4" rotation="-45 0 0">
                <a-camera  ></a-camera>
              </a-entity>

              <a-entity light="type: ambient; intensity: 0.5;"></a-entity>
              <a-entity light="type: directional; castShadow: true; intensity: 1;" position="-5 3 1.5"></a-entity>

              <a-sky color="#7BC8A4"></a-sky>
              <a-plane position="0 0 0" rotation="-90 0 0" width="500" height="500" color="#7BC8A4" shadow="cast: true; receive: true"></a-plane>

              {this.getBoxes()}

            </a-scene>
  }
};
