let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let wave; // generating first wave
let wave2; // generating Second wave
let wave3; // generating third wave
let song;


function preload() {
  
  bg = loadImage('images/background.jpg'); // background image
  song = loadSound('assets/ElectricLove.mp3'); 
  myfont = loadFont('assets/myfont.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,230,100,100);
  w = width + 100;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  
  slider = createSlider(200, 400, 300);
  slider.position(10, 10);
  slider.style('width', '600px');
  
  
  musicbutton = createButton("play");
  musicbutton.position(100,100);
  musicbutton.mousePressed(MusicToggle);
  musicbutton.style('color:white');
  musicbutton.style('font-size', '50px');
  musicbutton.style('font-family', 'myfont');
  musicbutton.style('background-color', 'cornflowerblue');
  musicbutton.style('border', 'none');
  musicbutton.size(200,100);

  
  wave = new Wavemaker(0);
  wave2 = new Wavemaker(50);
  wave3 = new Wavemaker(100);

  
}

function draw() {
  
  amplitude = slider.value();
  background(bg,100,100);
  calcWave();
  wave.show();
  wave2.show();
  wave3.show();
  
  
}

function MusicToggle() {
  
  if (!song.isPlaying()) {
    
    song.play();
    musicbutton.html("Pause");
    
  } else {
    
    song.pause();
    musicbutton.html("Play");
    
  }
  
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.018;

  // For every x-value, calculate a y-value with sine function
  let x = theta;
  
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}


class Wavemaker {
  
  constructor(waveheight){
    
    this.waveheight = waveheight;
    
    
  }
  show() {
    
    noStroke();
    
    
    for (let x = 0; x < yvalues.length; x++) {
    
      fill(x*2,50,100);
      
      rect(x * xspacing, height / 3 + yvalues[x]+this.waveheight, 55, 55, 20);


    
    }
  }
  
}
