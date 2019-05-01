/*
	laser class
*/

class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
		this.speed.y = -10;
		this.width = 10;
		this.height = 25;
		this.color = {
			r: laserRed,
			g: 0,
			b: 200
		};
	}
	
	display() {
		
		image(strike, this.x, this.y);
	}
	
	update() {
		super.update();
		
		// remove lasers above canvas
		if (this.y < -this.height) {
			this.remove(lasers);
		}
	}
}

