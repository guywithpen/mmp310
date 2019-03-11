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
            var = random(3);
            if (r > 2) {
            bezier(x, y, x + w, y, x, y + h, x + w, y + h);
            } else if (r > 1) {
             bezier(x, y, x + w, y, x, y + h, x + w, y + h);
            } else {
            bezier(x, y, x + w, y, x, y + h, x + w, y + h);
            }
		
	}
}