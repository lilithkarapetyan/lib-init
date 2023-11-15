let img; 

function preload() {
    img = loadImage("https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQHmko3ML9W6M3PPzNlD9yXfvvPAlFmZCofed3qQ-ens3_aDfrohWPrPveo042VMHWn");
}

function setup() {
    createCanvas(500, 500);
    background(100, 200, 100);  
}

function draw() {
    rect(0, 0, 100, 100);
    textSize(70);
    stroke(255, 0, 0);
    text("Hello", width / 2, height / 2);
    ellipse(width / 2, height / 2, 100, 100);
    image(img, 0, 0, width, height);
}