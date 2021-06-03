class Agent {

	constructor(x, y) {
		this.pos = createVector(x, y);
		this.direction = createVector(0, 1);
		this.counter = 0;
		this.color = 200;
		this.clearTime = 400
	}


	update() {
		this.direction.x = random(-1, 1);
		this.direction.y = random(-1, 1);

		this.direction = this.direction.normalize().mult(10);


		this.pos.add(this.direction);

		this.counter += 1;

		if (this.counter >= this.clearTime) {
			if (this.color == 200) {
				this.color = 0;
			} else {
				this.color = 200;
			}
			this.counter = 0;
		}

	}

	show() {
		fill(this.color);
		stroke(this.color);
		ellipse(this.pos.x, this.pos.y, 1, 1);
	}
}
