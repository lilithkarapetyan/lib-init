function setup() {
    createCanvas(500, 500);
    background(100, 200, 100);
}

function draw() {
    rect(0, 0, 100, 100);
    textSize(70);
    stroke(255, 0, 0);
    text("Hello", width / 2, height / 2);
    ellipse(width / 2, height / 2, 100, 100)
}