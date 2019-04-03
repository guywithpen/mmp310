var spaceship = {
	x: 0,
	y: 200,
	size: 100,
	speed: 5,
	display: function() {
		fill('white');
		noStroke();
		triangle(this.x, this.y, this.x + this.size/2, this.y + this.size, this.x - this.size/2, this.y + this.size);
	},
	update: function() {
		if (keyIsDown(LEFT_ARROW)) {
			this.x -= thisthisthis.speed;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			this.x += thisthis.speed;
		}
	}
};

function draw() {
	background(51);

	spaceship.display();
	spaceship.update();
    
    for (let i = 0; i < asteroids. length; i++) {
        asteroids[i].display();
    }
}