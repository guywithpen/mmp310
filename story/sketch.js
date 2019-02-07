/*
    interactive story by jayson 
*/

// global variable

//beginning, middle, end
var currentSetting = "beginning";

function setup() {
    createCanvas (windowWidth, windowHeight);
}

function draw() {
    background(50);
    
    //sky
    fill('#aec4e5');
    noStroke();
    rect(0, 0, 1000, 8000);
    
    // first character
    fill('#4c7e84');
    noStroke();
    ellipse(200, 590, 260, 200);    // body
    stroke(0);
    ellipse(250, 570, 20, 35);  // left eye
    ellipse(200, 570, 20, 35);  // right eye
    
    // second character
    fill('#843c23');
    noStroke();
    arc(500, 590, 200, 200, 0, PI + QUARTER_PI, CHORD); //body
    stroke(0);
    arc(500, 570, 20, 27, 0, PI, CHORD); //right eye
    arc(450, 570, 20, 27, 0, PI, CHORD); //left eye
    
     //wall
     fill('#564644');
    noStroke();
    rect(800, 200, 100, 2000);
   
    //ground
    fill('#604130');
    noStroke();
    rect(0, 700, 1000, 2000);
    
    //grass
    fill('#308744');
    noStroke();
    rect(0, 700, 1000, 100);
}