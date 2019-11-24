AFRAME.registerComponent('oscillator', {
  schema: {
    targetHeight: {type: 'number'},
    delay: {type: 'number'}
  },

  init: function () {
    this.delta = 0;
    this.lock = true;
    setTimeout(()=>{
      this.lock = false;
    }, this.data.delay*10);
    this.heightFix = Math.random();
  },

  tick: function (time, timeDelta) {
    if(this.lock) {
      return;
    }

    const currentPosition = this.el.object3D.position;

    // Amplitude (Tallness) of the wave.
    A = 1.5;
    // How many waves there are for each cycle.
    B = 3;
    // How far to shift the wave’s X position.
    C = 0.5;
    // How far to shift the wave’s Y position.
    D = 0.5;

    this.delta += (timeDelta/1000);

    const heightDelta = A * ( Math.sin ( B * ( this.delta - C ) ) ) + D;

    this.el.setAttribute('height', (heightDelta + A));
    // this.el.setAttribute('rotation', (heightDelta*10*this.heightFix)+ ' '+(heightDelta*45*this.heightFix)+' '+(this.heightFix*heightDelta*10));
   }

});
