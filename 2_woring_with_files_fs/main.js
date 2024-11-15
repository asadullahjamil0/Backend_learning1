const { error } = require("console");
const fs = require("fs");
// console.log(fs);

console.log("Starting...");
// fs.writeFileSync("asad.txt", "AsadUllah is a muslim");
fs.writeFile("Asad2.txt", "AsadUllah also offer salah", () => {
    console.log("File created!");
    fs.readFile("Asad2.txt", (error, data) => {
        console.log(error, data.toString());
    })
});
fs.appendFile("asad.txt", " he lives in pakistan", (e, d) => {
    console.log(d);
})
console.log("ending...");