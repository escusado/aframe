const Chroma = require('chroma-js');

AFRAME.registerComponent('color-changer', {
  schema: {
    colorSeed: {type: 'number'}
  },

  init: function () {
    this.delta = 0;
    // this.colorScale = Chroma.scale(['#FF0014','#FF6813', '#FBF992', '#5CCA40', '#0091D2', '#A800E6', '#FF0014']).mode('lch').colors(256)
    // this.colorScale = Chroma.scale(["#ff0000", "#ffa500", "#ffff00", "#00ff00", "#0000ff", "#ff0000"]).mode('lch').colors(256);
    this.colorScale = Chroma.scale(["#36b5b0", "#9dd8c8", "#f09595", "#fcf5b0"]).mode('lch').colors(350);
    console.log('>>>>', this.data.colorSeed*10);
    this.el.setAttribute('color', this.colorScale[Math.abs(Math.ceil(this.data.colorSeed))]);
  },

  tick: function (time, timeDelta) {
    const currentHeight = this.el.components.geometry.data.height;
    console.log(currentHeight);
    this.el.setAttribute('color', this.colorScale[Math.abs(Math.ceil(currentHeight*100))]);
    // this.el.setAttribute('height', heightDelta + A);
   }

});
