const path = require('path');

module.exports = {
    entry: "./lib/index.js",
    output: {
        filename: "lib.js",
        path: path.resolve(__dirname, "dist"),
    },
}