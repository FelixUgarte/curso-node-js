// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

//.mjs
import { sum, restar, multiplicar } from "./sum.mjs";

console.log(sum(1, 4));
console.log(restar(6, 3));
console.log(multiplicar(4, 2));
