function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    textSize(50);

    var columns = 6;
    var rows = 4;
    var w = width / columns; // column width
    var h = height / rows; // row height

    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {
            noFill();
            stroke(255);
            var r = random(3);
            if (r > 2) {
                bezier(x, y, x + w, y, x, y + h, x + w, y + h);
                ellipse(x + w, y, 15);
                ellipse(x, y + h, 25);
                ellipse(x, y, 35);
                ellipse(x + w, y + h, 45);
            } else if (r > 1) {
                bezier(x, y , x + w, y+30, x+ 20, y + h, x + w, y + h);
            } else {
                bezier(x, y, x + w, y-50, x-80, y + h, x + w, y + h);
            }

        }
    }
}

function mouseClicked() {
    save('save_image.jpg');
}