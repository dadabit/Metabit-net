
// Create a canvas of given size
let angle = 0;
let depth = 0;
  
function setup() {
    background(0);
    frameRate(240);
    createCanvas(windowWidth, windowHeight, WEBGL);
}
  
// Create a draw function
function draw() {

    // depth -= random(-10, 10);
    
    ambientLight(255);
    push();
    
    translate(0, 0, depth);
              
    rotateX(angle * 0.5);
    rotateZ(angle * 0.7);
    rotateY(angle * 0.06);
    stroke(0, 0, 0);
    normalMaterial();
  
    // Create box of given size
    box(500, 500, 10);
    push();
    angle += .06
}
