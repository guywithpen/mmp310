
var spaceship = { 
	x: 0, 
	y: 200,
	size: 50,
	speed: 5,
	display: function () {
		//fill('pink');
		<img src="sprite.png" alt="The Slayer">;
	},
	update: function () {
		if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed;
		}
	
		if (keyIsDown(LEFT_ARROW)) {
			this.x -= this.speed;
		}
	}
};

var asteroids = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	
	// position the spaceship at start of game
	spaceship.x = width/2;
	spaceship.y = height - 200;
}

function draw() {
	background(51);
	
	// adds random asteroid
	if (random(100) > 99) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();
	}
}