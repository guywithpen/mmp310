class Spaceship extends Entity {
    constructor() {
        super(width / 5, height - 1500);
    }



    display() {
        image(sprite, this.x, this.y);
    }

    controls() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.speed.x = 5;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.speed.x = -5;
        } else {
            this.speed.x = 0;
        }
    }
}
