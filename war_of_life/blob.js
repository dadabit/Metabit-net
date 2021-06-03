class Blob {

    constructor(x, y, killRadius, color) {

        this.states = {
            "Alive": true,
            "Dead": false
        };

        this.pos = createVector(x, y);
        this.state = this.states["Alive"];

        this.killRadius = killRadius;
        this.color = color;
        this.vel = createVector(0, 0);
        this.speed = 3;
    }

    checkState(blobs) {
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.vel = this.vel.normalize();
        for (var blob of blobs) {
            if (blob.color != this.color) {
                var disToBlob = abs(sqrt((abs(this.pos.x - blob.pos.x) ** 2) + (abs(this.pos.y - blob.pos.y) ** 2)));
                if (this.killRadius >= disToBlob) {
                    blob.state = blob.states["Dead"];
                    fill(0, 255, 0);
                    ellipse(blob.pos.x, blob.pos.y, disToBlob, disToBlob);

                }
            }
        }

        this.pos.add(this.vel.mult(this.speed));
        this.speed = map(mouseX, 0, width, 0, 15);

        if (this.state == false)
        {
            this.pos = createVector(random(0, width), random(0, height));
            this.killRadius = random(12, 30);
            this.state = this.states["Alive"];
        }
    }
}
