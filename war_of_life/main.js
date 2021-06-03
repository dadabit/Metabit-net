function setup() {
    createCanvas(windowWidth, windowHeight, P2D);

    blobs = [];

    population = width/5;

    for (var i = 0; i < population; i++) {
        var colors = ["blue", "red"];
        var Blobcolor = colors[Math.floor(Math.random()*colors.length)];
        console.log(Blobcolor);
        blobs.push(new Blob(random(0, width), random(0, height), random(12, 30), Blobcolor));
    }

    // for (var i = 0; i < population; i++) {
    //     var Blobcolor = color(255, 0, 0);
    //     blobs.push(new Blob(width, random(0, height), random(12, 30), Blobcolor));
    // }
    //
    // for (var i = 0; i < population; i++) {
    //     var Blobcolor = color(0, 0, 255);
    //     blobs.push(new Blob(0, random(0, height), random(12, 30), Blobcolor));
    // }
}

function draw() {
    background(0);
    noStroke();


    for (blob of blobs) {
        blob.checkState(blobs);
        if (blob.state) {
            fill(200);
            ellipse(blob.pos.x, blob.pos.y, blob.killRadius, blob.killRadius);
            fill(blob.color);
            ellipse(blob.pos.x, blob.pos.y, 10, 10);
            console.log(blob.state);
        }
        // fill(255);
        // ellipse(blob.pos.x, blob.pos.y, blob.killRadius, blob.killRadius);
        // fill(blob.color);
        // ellipse(blob.pos.x, blob.pos.y, 10, 10);
        // console.log(blob.state);
    }
}
