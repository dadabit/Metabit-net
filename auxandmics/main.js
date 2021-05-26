cells = [];
population = 70;

function setup() {
    createCanvas(800, 800, P2D)
    background(0);
    
    for (var i = 0; i < population; i++)
    {
        cells.push(new Agent(random(width/2-70, width/2), random(height/2-15, height/2), random(-1, 1)));
    }

    frameRate(240)

}

function draw() {
    // background(0)

    for (cell of cells) {
        cell.update();
        cell.show();
        cell.dir += 0.1*frameCount*cell.factor;
        cell.speed = 10;
    }

}
