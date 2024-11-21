const os = require("node:os");

console.log("Información del Sistema");
console.log("-----------------------");
console.log("Verisón del sistema operativo", os.platform());
console.log("Arquitectura", os.release());
console.log("CPUs", os.cpus());
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("PC encendida", os.uptime() / 60 / 60);
