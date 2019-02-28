function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    rectMode(CENTER);
    noStroke();

    for (let x = 0; x < width; x += 200) {
        fill('plum');
        ellipse(x, 100, 200); // face
        fill(0);
        ellipse(x + 50, 50, 50); // left eye
        ellipse(x - 50, 50, 50); // right eye
        fill('gold');
        triangle(x -80, 70, x + 58, 200, x + 86, 150); // mouth
        arc(x, 590, 200, 200, 0, PI + QUARTER_PI, CHORD);
        arc(x, 590, 200, 200, -QUARTER_PI, PI, CHORD);

    }

    let x = width / 10;
    for (let i = 0; i < 5; i++) {
        var c = map(i, 0, 4, 0, 255); // map color
        fill(c);
        var s = map(i, 0, 4, 50, 200); // map size
        var y = map(i, 0, 4, 300, 500);
        ellipse(x, y, s);
        x += width / 5;
    }

}