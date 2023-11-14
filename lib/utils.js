export function callDraw() {
    window.requestAnimationFrame(() => {
        draw();
        callDraw();
    });
}

function getRadiansFromDegrees(angle) {
    return angle * Math.PI / 180;
}

export function getRadians(angle) {
    if(window.ANGLE_MODE === window.RADIANS) {
        return angle;
    }

    return getRadiansFromDegrees(angle); 
}