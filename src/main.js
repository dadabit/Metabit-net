let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine: engine
});

let ground = Matter.Bodies.rectangle(200, 300, 500, 350, { isStatic: true });