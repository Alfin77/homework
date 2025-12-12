const fs = require("fs");
const path = require("path");

let mainBuffer = Buffer.from("Node.js buffers are powerful");

let prefixBuffer = Buffer.from("FAST ");
prefixBuffer.copy(mainBuffer, 0);

let extraBuffer = Buffer.from(" and flexible!");

let finalBuffer = Buffer.concat([mainBuffer, extraBuffer]);

let finalString = finalBuffer.toString();

let filePath = path.join(__dirname, "buffer_output.txt");
fs.writeFileSync(filePath, finalString);

console.log("File saved at:", filePath);