
var agents = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);



	for (i = 0; i < 1000; i++) {
		agents.push(new Agent(random(windowWidth/2, windowWidth/2), random(windowHeight/2, windowHeight/2)));
	} 
}

function draw() {
	// background(0);
	for (key of agents) {
		key.update();
		key.show();
		// line(windowWidth/2, windowHeight/2, key.pos.x, key.pos.y);
	}
}


