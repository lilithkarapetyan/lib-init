import { getRadians } from "./utils.js";

window.createCanvas = function(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    window.width = width;
    window.height = height;
    window.context = canvas.getContext("2d");
    document.body.append(canvas);
}
window.background = function(r, g, b) {
    window.context.save();
    window.context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    window.context.fillRect(0, 0, window.width, window.height);
    window.context.restore();
}
window.stroke = function(r, g, b) {
    window.context.strokeStyle = `rgb(${r}, ${g}, ${b})`;
}
window.rect = function(x, y, w, h) {
    window.context.fillRect(x, y, w, h);
}
window.textSize = function(size) {
    const [_, currentFont] = window.context.font.split(" ");
    window.context.font = `${size}px ${currentFont}`;
}
window.text = function(string, x, y) {
    window.context.fillText(string, x, y);
    window.context.strokeText(string, x, y);
}
window.angleMode = function(mode) {
    if(mode === window.RADIANS || mode === window.DEGREES) {
        window.ANGLE_MODE = mode;
    }
}
window.sin = function(angle) {
    const radians = getRadians(angle);
    return Math.sin(radians);
}
window.cos = function(angle) {
    const radians = getRadians(angle);
    return Math.cos(radians);
}
window.atan2 = function(value) {
    return Math.atan2(value);
}
window.min = function(...value) {
    return Math.min(...value);
}
window.max = function(...value) {
    return Math.max(...value);
}
window.floor = function(value) {
    return Math.floor(value);
}
window.random = function(a, b) {
    let min = a;
    let max = b;
    if(b === undefined) {
        min = 0;
        max = a ?? 1;
    }
    return Math.floor(Math.random() * b + a);
}
window.map = function (n, a, b, a1, b1) {
    return (n - a) / (b - a) * (b1 - a1) + a1;
}
window.dist = function (x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
}




