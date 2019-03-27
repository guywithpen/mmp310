var points = []; // array to save xy points
var rot = 0; // rotation variable
function setup() {
    createCanvas(640, 360);
    noStroke();
    fill('plum');
}

function draw() {
    background(51);

    if (mouseIsPressed) {
        var r = random(0, 300);
        var g = random(0, 500);
        var b = random(100, 155);
        var c = color(r, g, b);
        var point = [mouseX, mouseY, c];
        points.push(point);
        
    }

    for (let i = 15; i < points.length; i++) {
        let x = points[i][0];
        let y = points[i][1];
        let c = points[i][2];

        face(x, y, c);

        points[i][1]++; // increment y by 1
    }
    
    	translate(width/2, height/2);

}

function face(x, y, c) {
    //var y = random(height/2 + 80, height/2 - 80);
    fill(c);
    ellipse(x, y - 50, 200); // face
    //fill(0);
    //ellipse(x + 50, 50, 50); // left eyeS
    //ellipse(x - 50, 50, 50); // right eye
    fill('#a5639c');
    triangle(x - 60, y + 3, x + 60, y + 3, x + 1, y + 20); // mouth
    arc(x - 40, y - 80, 50, 100, 0, PI + QUARTER_PI, CHORD);
    arc(x + 40, y - 80, 50, 100, 6.6 - QUARTER_PI, PI, CHORD);
    
    
    
    

}
