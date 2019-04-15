
class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
		this.speed.y = -10;
        this.width = 10;
        this.height = 25;
	}


	display() {
	image(strike, this.x, this.y);
	}
    
    update() {
        super.update();
        
        if (this.y < -this.height) {
            this.remove(laser);
        }
    }
    
}