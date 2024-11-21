//En esta versión, lee todos los archivos de manera sincrona (todos juntos a la vez)
//Y si alguno se demora, esperará a terminar para continuar con el próximo
const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log(text);

console.log("Leyendo el segundo archivo...");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");

console.log(secondText);
