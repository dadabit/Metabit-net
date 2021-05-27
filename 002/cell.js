class Agent {
    constructor(x, y, id) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.speed = 10;
        this.dir = 45;
        this.factor = id;
    }

    update() {
        this.vel.x = sin(this.dir);
        this.vel.y = cos(this.dir);

        this.vel = this.vel.normalize();
        this.pos.add(this.vel.mult(this.speed));
    }

    show() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, 1, 1);
    }
}