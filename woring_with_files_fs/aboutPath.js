import path from "path";

// console.log(path);
let myPath = "D:\\Git\\Backend_learning1\\woring_with_files_fs\\asad.txt";
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath))
// correct path by path module
console.log(path.join("c:/", "prgrams\\asa.txt"));