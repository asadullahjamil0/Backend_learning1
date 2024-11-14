import { readFile } from "fs";
import fs from "fs/promises";
let a = await fs.readFile("asad.txt");
let b = await fs.appendFile("asad.txt", " \n\n\n\n\nhe is a good boy also");
console.log(b);
console.log(a.toString());