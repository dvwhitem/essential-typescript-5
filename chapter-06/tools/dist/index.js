"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
let printMessage = (msg) => console.log(`Message: ${msg}`);
let message = ("Hello, TypeScript");
printMessage(message);
debugger;
let total = (0, calc_1.sum)(123, 127, 300);
console.log(`Total: ${total}`);
//# sourceMappingURL=index.js.map