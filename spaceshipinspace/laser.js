class Laser {
	constructor() {
		//this.x = random(width);
		this.y = -100;
		this.size = 45;
		this.speed = {
			//x: random(-1, 1),
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
		var d = dist(this.x, this.y, asteroid.x, asteroid.y);
		if (d < this.size / 2) {
		 keySpace = false;
		}
	}
}