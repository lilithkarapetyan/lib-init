window.addEventListener("load", () => {
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

    setup();
    callDraw(); 
})

function callDraw() {
    window.requestAnimationFrame(() => {
        draw();
        callDraw();
    });
}


