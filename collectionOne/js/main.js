


const shape = new mojs.Shape({
  shape:          'polygon',
  fill:           'none',
  stroke:         'cyan',
  radius:         50,
  strokeWidth:    2,
  angle:          { [-180] : 0 },
  top: '50%', y: 0,
  x:-400,

  duration:       900
}).then({
  strokeWidth:    1,
  fill: 'none',
  scale:          { to: 0, easing: 'sin.in' },
}).then({
  strokeWidth:    2,

  fill: 'none',
  scale:          { to: 1, easing: 'sin.in' },
}).then({
  strokeWidth:    1,
  scale:          { to: 1, easing: 'sin.in' },
});

const burst = new mojs.Burst({
  // left: 0, top: 0,
  x: -400,
  radius: { 0: 100 },
  count: 12,
  children: {
    shape: 'polygon',
    radius: 20,
    angle: { 360: 0 },
    fill: { 'blue' : 'cyan' },
    duration: 1800
  }
});

const shapeTwo = new mojs.Shape({
  shape:          'circle',
  fill:           'none',
  stroke:         {'red': '#fff'},
  radius:         10,
  strokeWidth:    {0:2},
  // angle:          { [-180] : 0 },
  scale:          {0:3},
  top: '50%', y: 0,
  x:0,

  duration:       1200
// }).then({
//   strokeWidth:    5,
//   fill: 'black',
//   scale:          { to: 0, easing: 'sin.in' },
// }).then({
//   strokeWidth:    0,
//   fill: 'pink',
//   scale:          { to: 2, easing: 'sin.in' },
// }).then({
//   strokeWidth:    0,
//   scale:          { to: 2, easing: 'sin.in' },
});

const burstTwo = new mojs.Burst({
  // left: 0, top: 0,
  x: 0,
  radius: { 0: 100 },
  count: 9,
  children: {
    shape: 'circle',
    radius: 20,
    angle: { 360: 0 },
    fill: { 'red' : 'purple' },
    duration: 1200
  }
});

const circle = new mojs.Shape({
  // left: 0, top: 0,
  count: 10,
  stroke: { 'red' : 'purple' },
  strokeWidth: { 20 : 0 },
  fill: 'none',
  scale: { 0: 1.5, easing: 'elastic.out' },
  radius: { 0: 60 },
  duration: 1200,
  opacity:  { 1: 0.2 }
});






const shapeThree = new mojs.Shape({
  shape:          'rect',
  fill:           'none',
  stroke:         'lime',
  radius:         46,
  strokeWidth:    1,
  angle:          { [270] : 0 },
  top: '50%', y: 0,
  x:400,

  duration:       600
}).then({
  strokeWidth:    0,
  // fill: 'green',
  scale:          { to: 0, easing: 'sin.in' },
}).then({
  strokeWidth:    0,
  // fill: 'green',
  scale:          { to: 1, easing: 'sin.in' },
}).then({
  strokeWidth:    2,
  // fill: 'lime',
  scale:          { to: 1, easing: 'sin.in' },
});

const burstThree = new mojs.Burst({
  // left: 0, top: 0,
  x: 400,
  radius: { 0: 100 },
  count: 9,
  children: {
    shape: 'zigzag',
    radius: 20,
    angle: { 360: 0 },
    fill: { 'lime' : 'green' },
    duration: 2400
  }
});







class Heart extends mojs.CustomShape {
  getShape () { return '<path d="M50,10.8333333 C28.38,10.8333333 10.8333333,28.38 10.8333333,50 C10.8333333,71.62 28.38,89.1666667 50,89.1666667 C71.62,89.1666667 89.1666667,71.62 89.1666667,50 C89.1666667,28.38 71.62,10.8333333 50,10.8333333 Z M50,81.3333333 C32.7275,81.3333333 18.6666667,67.2725 18.6666667,50 C18.6666667,48.8641667 18.745,47.7283333 18.8625,46.6316667 C28.1058333,42.5191667 35.43,34.96 39.2683333,25.5991667 C46.3575,35.6258333 58.0291667,42.1666667 71.2283333,42.1666667 C74.2833333,42.1666667 77.2208333,41.8141667 80.0408333,41.1483333 C80.8633333,43.9291667 81.3333333,46.9058333 81.3333333,50 C81.3333333,67.2725 67.2725,81.3333333 50,81.3333333 Z"></path>'; }
  getLength () { return 292.110107421875; } // optional
}
mojs.addShape( 'heart', Heart ); // passing name and Bubble class

/* USE CUSTOM SHAPE */
// now it is avaliable on mojs.Shape constructor as usual
const heart = new mojs.Shape({
  shape:    'heart',
  fill:     '#333',
  // stroke:   {'blue': 'lime'},
  stroke: 'none',
  // opacity:  1,
  // scale:  { 1: 1 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  y:         {220:200},
  duration:  1000,

}).then({
  stroke: 'red',
  y: 220,
});

const eyeOne = new mojs.Shape({
  shape:          'circle',
  fill:           'none',
  stroke:         '#444',
  radius: 5,
  strokeWidth:    2,
  y:         {220:200},
  x:-10,
  duration:  1000,
  scale: {1:1.2},
}).then({
  stroke: 'none',
  y: 220,
});

const eyeTwo = new mojs.Shape({
  shape:          'circle',
  fill:           'none',
  stroke:         '#444',
  radius: 5,
  strokeWidth:    2,
  y:         {220:200},
  x:10,
  duration:  1000,
  scale: {.8:1.2},
}).then({
  stroke: 'none',
  y: 220,
});


new MojsPlayer({ add: heart });
new MojsPlayer({ add: eyeOne });
new MojsPlayer({ add: eyeTwo });


new MojsPlayer({ add: shape});
new MojsPlayer({ add: burst});
new MojsPlayer({ add: shapeTwo});
new MojsPlayer({ add: burstTwo});
new MojsPlayer({ add: circle});


new MojsPlayer({ add: shapeThree});
new MojsPlayer({ add: burstThree});
