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
    
    
}