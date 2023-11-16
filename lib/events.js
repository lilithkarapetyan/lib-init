import { callDraw } from "./utils";

window.addEventListener("load", () => {
    typeof preload !== "undefined" && preload();
    setup();
    callDraw(); 
})
