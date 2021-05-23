class Agent {

	constructor(x, y) {
		this.pos = createVector(x, y);
		this.direction = createVector(0, 1);
		this.size = 30;
		this.color = 255;
		this.colortoggle = false;
	}


	update() {
		this.direction.x = random(-1, 1);
		this.direction.y = random(-1, 1);

		this.direction = this.direction.normalize().mult(30);

		this.size -= 1;

		if (this.size <= 5) {
			this.size = 30
			if (this.colortoggle == true) {
				this.color += 5;
			} else {
				this.color -= 5;
			}
			
		}

		if (this.color <= 0) {
			if (this.colortoggle == true) {
				this.colortoggle = false;
			}else{
				this.colortoggle = true;
			}
		}


		this.pos.add(this.direction);
	}

	show() {
		stroke(this.color, 15, 5, 80);
		fill(this.color/2, 30, 10, 80);
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}
}