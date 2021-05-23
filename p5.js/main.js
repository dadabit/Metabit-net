
var agents = [];

function setup() {
	createCanvas(1000, 650);
	background(0);
	frameRate(10);

	for (i = 0; i < 50; i++) {
		agents.push(new Agent(random(0, 1000), random(0, 650)));
	} 
}

function draw() {
	// background(0);
	for (key of agents) {
		key.update();
		key.show();
	}
}
