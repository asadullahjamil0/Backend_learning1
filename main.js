// const { createServer } = require('node:http');
// const fs = require('fs');
// import { createServer } from "node:http";
// import { a, b, e } from "./myModule.js"
// console.log(a, b, e);
// import defaul from "./myModule.js";
// console.log(defaul.y);

const a = require("./myModule2.js");
console.log(a, __dirname, __filename);