class Agent {

	constructor(x, y) {
		this.pos = createVector(x, y);
		this.direction = createVector(0, 1);
	}


	update() {
		this.direction.x = random(-1, 1);
		this.direction.y = random(-1, 1);

		this.direction = this.direction.normalize().mult(5);


		this.pos.add(this.direction);
	}

	show() {
		stroke(255);
		ellipse(this.pos.x, this.pos.y, 1, 1);
	}
}