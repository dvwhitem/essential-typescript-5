function calculateTax(amount) {
    return amount * 1.2;
}
let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 'Hello';
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
console.log(`${12} = ${calculateTax(12)}`);
console.log('Hello = ', `${calculateTax('Hello')}`);
console.log(`${true} = ${calculateTax(true)}`);
