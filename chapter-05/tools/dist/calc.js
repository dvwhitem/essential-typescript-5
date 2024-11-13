"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(...vals) {
    return vals.reduce((total, value) => total + value);
}
