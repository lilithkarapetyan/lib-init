export function callDraw() {
    window.requestAnimationFrame(() => {
        draw();
        callDraw();
    });
}

export function getRadiansFromDegrees(angle) {
    return angle * Math.PI / 180;
}

export function getRadians(angle) {
    if(window.ANGLE_MODE === window.RADIANS) {
        return angle;
    }

    return getRadiansFromDegrees(angle); 
}

export function canvasSetup(canvas) {
    window.width = canvas.width;
    window.height = canvas.height;
    window.context.fillStyle = "white";
}