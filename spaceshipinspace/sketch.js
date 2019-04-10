var sprite;
var laser =[];
var spaceship = {
    x: 0,
    y: 200,
    size: 200,
    speed: 5,
    display: function () {
        //fill('pink');
        image(sprite, this.x, this.y, this.size, this.size);

    },
    update: function () {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
                if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }

        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }
    }
};

function preload() {
    sprite = loadImage("sprite.png");
}

var asteroids = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    // position the spaceship at start of game
    spaceship.x = width / 2;
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
        
        if (keyisDown(32) || keyIsDown(88)) {
            laser.push(new laser());
        }
    }
}
