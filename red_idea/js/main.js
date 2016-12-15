const backgroundCircle = new mojs.Shape({
  fill: { '#581616' : '#581616'},
  scale: { 0: 1, easing: 'sin.in' },
  radius: { 0: 400 },
  duration: 1200,
  opacity:  { 1: 0}
});

const circleBurst = new mojs.Burst({
  x: 0,
  radius: { 0: 110 },
  count: 11,
  children: {
    shape: 'circle',
    radius: 20,
    angle: { 360: 0 },
    fill: { '#fff' : '#fff' },
    duration: 1200
  }
});

const centerCircle = new mojs.Shape({
  stroke: { '#fff' : '#fff' },
  strokeWidth: { 10 : 0 },
  fill: { '#fff' : 'none' },
  scale: { 0: 1.5, easing: 'elastic.out' },
  radius: { 0: 20 },
  duration: 1200,
  opacity:  { 1: 1 }
});

const bigCircle = new mojs.Shape({
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
