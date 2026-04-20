const fs = require("fs");

const readableStream = fs.createReadStream("docs/Hugefile.txt", "utf-8");
console.log(readableStream)
const writableStream = fs.createWriteStream("docs/Hugefile_copy.txt");

readableStream.on("data", (buffer) => {
    writableStream.write(buffer);
});

readableStream.on("end", () => {
    writableStream.end();
    console.log("File copied successfully ✅");
});

readableStream.on("error", (err) => {
    console.log("Read Error:", err.message);
});

writableStream.on("error", (err) => {
    console.log("Write Error:", err.message);
});
