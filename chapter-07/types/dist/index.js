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
//console.log('Hello = ', `${calculateTax('Hello')}`)
//console.log(`${true} = ${calculateTax(true)}`)
console.log('--------------');
function calculateTax2(amount) {
    //  return (amount * 1.2).toFixed(2)
    return (amount * 1.2);
}
let price = 100;
let taxAmount = calculateTax2(price);
let halfShare = taxAmount / 2;
console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
console.log('------- Union of types ---------');
function calculateTax3(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let textNumber = calculateTax3(100, false);
let textString = calculateTax3(100, true);
console.log('Text string:', textString);
console.log('Text number', textNumber);
