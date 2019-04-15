var asteroidProb
var sprite;
var strike;
var spaceship;
var asteroids = [];

function preload() {
    strike = loadImage("strike.png");
    sprite = loadImage("sprite.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    spaceship = new Spaceship();
}

function draw() {
    background(51);

    // adds random asteroid
    if (random(100) > asteroidProb) {
        // create an asteroid
        asteroids.push(new Asteroid());
    }

    asteroidProb -= 0.1;

    spaceship.controls();
    spaceship.display();
    spaceship.update();

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();
        asteroids[i].collide();

        for (let i = 0; i < laser.length; i++) {
            asteroids[i].display();
            asteroids[i].update();
            asteroids[i].collide();
        }
    }
}
