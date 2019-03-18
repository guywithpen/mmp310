function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    rectMode(CENTER);
    noStroke();

    for (let x = 0; x < width; x += 300) {
        var r = random(0, 300);
		var g = random(0, 500);
		var b = random(100, 155);
        var y = random(height/2 + 80, height/2 - 80);
        fill(r,b,g);
        ellipse(x, y -50, 200); // face
        //fill(0);
        //ellipse(x + 50, 50, 50); // left eyeS
        //ellipse(x - 50, 50, 50); // right eye
        fill('#a5639c');
        triangle(x -60, y+3, x + 60, y+3, x + 1, y+20); // mouth
        arc(x - 40, y-80, 50, 100, 0, PI + QUARTER_PI, CHORD);
        arc(x + 40, y-80, 50, 100, 6.6 -QUARTER_PI, PI, CHORD);

    }

    let x = width / 10;
    for (let i = 0; i < 5; i++) {
        var c = map(i, 0, 4, 0, 255); // map color
        fill(c);
        var s = map(i, 0, 4, 50, 200); // map size
        var y = map(i, 0, 4, 300, 500);
        //ellipse(x, y, s);
        x += width / 5;
    }

}