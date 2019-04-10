class Laser extends Entity {
    construnctor() {
        super(spaceship.x, spaceship.y);
        this.speed.y = -10;
    }
    
    display() {
        fill('blue');
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, 10, 25)
    }
}
