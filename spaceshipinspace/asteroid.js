class Asteroid {
	constructor() {
		this.x = random(width);
		this.y = -100;
		this.size = 100;
		this.speed = {
			x: random(-1, 1),
			y: random(5)
		};
	}
	
	display() {
		fill(0);
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide() {
		var d = dist(this.x -50, this.y -50, spaceship.x, spaceship.y);
		if (d < this.size / 2) {
			textSize(100);
			textAlign(CENTER, CENTER);
			fill('red');
			text("F A L L E N", width/2, height/2);
			noLoop();	
		}
	}
}