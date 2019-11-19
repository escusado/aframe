AFRAME.registerComponent('oscilator', {
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
  },

  tick: function (time, timeDelta) {
    if(this.lock) {
      return;
    }

    const currentPosition = this.el.object3D.position;
    

    // Amplitude (Tallness) of the wave.
    A = 1.5;
    // How many waves there are for each cycle.
    B = 1
    // How far to shift the wave’s X position.
    C = 0.5;
    // How far to shift the wave’s Y position.
    D = 0.5;

    this.delta += (timeDelta/1000);

    const heightDelta = A * ( Math.sin ( B * ( this.delta - C ) ) ) + D;

    // console.log('>>>>>', heightDelta );
    this.el.setAttribute('height', heightDelta + A);

    // this.el.setAttribute('position', {
    //   x: currentPosition.x,
    //   y: currentPosition.y + (heightDelta/2),
    //   z: currentPosition.z
    // });

   }

});