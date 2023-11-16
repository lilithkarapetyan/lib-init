import { callDraw } from "./utils";

window.addEventListener("load", () => {
    typeof preload !== "undefined" && preload();
    setup();
    window.START_TIME = Date.now();
    callDraw(); 
})

if(typeof keyTyped !== "undefined") {
    window.addEventListener("keypress", (event) => {
        window.key = event.key;
        keyTyped();
    })
}

if(typeof mousePressed !== "undefined") {
    window.addEventListener("click", (event) => {
        mousePressed();
    })
}

window.addEventListener("mousemove", (event) => {
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
})

