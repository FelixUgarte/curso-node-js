//Una manera de hacer el async - await es hacerlo con módulos
//Es decir, usando la extensión .mjs

//const fs = require("node:fs/promises");
//Cambiar el require a módulo
import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo...");
const text = await readFile("./archivo.txt", "utf-8");
console.log("Primer texto:", text);

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo...");
const text2 = await readFile("./archivo2.txt", "utf-8");
console.log("Segundo texto:", text2);
