var strike;
class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
		this.speed.y = -10;
	}
	function preload() {
        strike = loadImage("sprite.png");
    }

	display() {
	image(strike, this.x, this.y);
	}
}