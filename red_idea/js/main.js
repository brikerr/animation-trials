const backgroundCircle = new mojs.Shape({
  // left: 0, top: 0,
  // count: 20,
  // stroke: { '#fff' : '#fff' },
  // strokeWidth: { 20 : 0 },
  fill: { '#842222' : '#842222' },
  scale: { 0: 1, easing: 'elastic.out' },
  radius: { 0: 400 },
  duration: 1200,
  opacity:  { 1: 0}
});



const circleBurst = new mojs.Burst({
  // left: 0, top: 0,
  x: 0,
  radius: { 0: 110 },
  count: 9,
  children: {
    shape: 'circle',
    radius: 20,
    angle: { 360: 0 },
    fill: { '#fff' : '#fff' },
    duration: 1200
  }
});


const centerCircle = new mojs.Shape({
  // left: 0, top: 0,
  // count: 20,
  stroke: { '#fff' : '#fff' },
  strokeWidth: { 10 : 0 },
  fill: { '#fff' : 'none' },
  scale: { 0: 1.5, easing: 'elastic.out' },
  radius: { 0: 20 },
  duration: 1200,
  opacity:  { 1: 1 }
});




const bigCircle = new mojs.Shape({
  // left: 0, top: 0,
  count: 10,
  stroke: { '#fff' : '#fff' },
  strokeWidth: { 5 : 0 },
  fill: 'none',
  scale: { 0: 1.5, easing: 'elastic.out' },
  radius: { 0: 60 },
  duration: 1200,
  opacity:  { 1:1 }
});


const timeline = new mojs.Timeline;
timeline.add( circleBurst, bigCircle, centerCircle, backgroundCircle);
new MojsPlayer({add: timeline});
