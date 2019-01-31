/*
    interactive story by jayson 
*/

// global variable



function setup() {
    createCanvas (windowWidth, windowHeight);
}

function draw() {
    background(50);
    
    // first character
    fill('#4c7e84');
    noStroke();
    ellipse(200, 200, 200, 200);    // body
    stroke(0);
    ellipse(250, 180, 20);  // left eye
    ellipse(200, 180, 20);  // right eye
    
    // second character
    fill('#843c23');
    noStroke();
    arc(500, 200, 200, 200, 0, PI + QUARTER_PI, CHORD); //body
    stroke(0);
    arc(500, 200, 20, 20, 0, PI, CHORD); //right eye
    arc(450, 200, 20, 20, 0, PI, CHORD); //left eye
    
}