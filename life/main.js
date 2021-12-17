
var agents = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	frameRate(10);

	for (i = 0; i < 50; i++) {
		agents.push(new Agent(random(0, windowWidth), random(0, windowHeight)));
	} 
}

function draw() {
	// background(0);
	for (key of agents) {
		key.update();
		key.show();
	}
}
