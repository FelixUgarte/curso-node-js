/*Otra manera de hacerlo que ya es vieja pero puede aparecer en proyectos viejos
Es envolviendo en una función e invocándola inmediatamente
IIFE- Inmediatly Invoked Function Expression
La extensión vuelve a ser .js */

const { readFile } = require("node:fs/promises");

(async () => {
  console.log("Leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto:", text);

  console.log("Hacer cosas mientras lee el archivo");

  console.log("Leyendo el segundo archivo...");
  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto:", text2);
})();
