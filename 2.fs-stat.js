const fs = require("node:fs");

//FileSystem me dará toda la información del archivo que le indique. En este caso, el archivo es "archivo.txt"
const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), //si es un fichero
  stats.isDirectory(), //si es un directorio
  stats.isSymbolicLink(), //si es un enlace simbólico
  stats.size //tamaño en bytes
);
