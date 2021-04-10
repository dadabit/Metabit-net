let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine: engine
});

let ground = Matter.Bodies.rectangle(200, 300, 500, 350, { isStatic: true });
let boxA = Matter.Bodies.rectangle(100, 100, 80, 80);
let boxb = Matter.Bodies.rectangle(100, 200, 80, 80);

Matter.World.add(engine.world, [boxA, boxB, ground]);
Matter.Engine.run(engine);