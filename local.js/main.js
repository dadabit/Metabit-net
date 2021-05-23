
var agents = [];

function setup() {
	createCanvas(1000, 650);
	background(0);

	for (i = 0; i < 1000; i++) {
		agents.push(new Agent(random(0, 1000), random(0, 650)));
	} 
}

function draw() {
	
	for (key of agents) {
		key.update();
		key.show();
	}
}
