function preload() {

}

function setup() {
    canvas = createCanvas(1000, 800);
    canvas.position(390, 100)
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 180, 180, 600, 400);

    fill("green");
    stroke("black");
    rect(180, 200, 40, 400);
    rect(780, 200, 40, 400);
    rect(200, 180, 600, 40);
    rect(200, 580, 600, 40);

    fill("red");
    stroke("black");
    circle(200, 200, 120);
    circle(800, 200, 120);
    circle(200, 600, 120);
    circle(800, 600, 120);
}

function snap() {
    save("Selfie.png")
}