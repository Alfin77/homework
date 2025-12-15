const fs = require("fs");

const introStream = fs.createReadStream("intro.txt");
const conclusionStream = fs.createReadStream("conclusion.txt");
const writeStream = fs.createWriteStream("full_report.txt");

let buffers = [];

introStream.on("data", function (chunk) {
  buffers.push(chunk);
});

introStream.on("error", function (err) {
  console.error("Error reading intro.txt:", err);
});

introStream.on("end", function () {

  conclusionStream.on("data", function (chunk) {
    buffers.push(chunk);
  });

  conclusionStream.on("error", function (err) {
    console.error("Error reading conclusion.txt:", err);
  });

  conclusionStream.on("end", function () {

    const mergedBuffer = Buffer.concat(buffers);
    writeStream.write(mergedBuffer);
    writeStream.end();

    console.log("Merging complete!");
  });
});