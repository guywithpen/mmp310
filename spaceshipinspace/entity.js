class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 100;
        this.speed = {
            x: 0,
            y: 0
        };
    }

    update() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    collide() {
        var d = dist(this.x, this.y, other.x, other.y);
        var size;
        if (thi.size > other.size) {
            size = this.size;
        } else {
            size = other.sizes;
        }
        if (d < size / 2) {
            return true;
        } else {
            return false
        }
    }
}
