
function calculateTax(amount: number) {
    return amount * 1.2
}

let myVar
console.log(`${myVar} = ${typeof myVar}`)
myVar = 12
console.log(`${myVar} = ${typeof myVar}`)
myVar = 'Hello'
console.log(`${myVar} = ${typeof myVar}`)
myVar = true
console.log(`${myVar} = ${typeof myVar}`)


console.log(`${12} = ${calculateTax(12)}`)
//console.log('Hello = ', `${calculateTax('Hello')}`)
//console.log(`${true} = ${calculateTax(true)}`)

console.log('--------------')
function calculateTax2(amount: number) {
  //  return (amount * 1.2).toFixed(2)
    return (amount * 1.2)
}

let price = 100
let taxAmount = calculateTax2(price)
let halfShare = taxAmount / 2

console.log(`Price: ${price}`)
console.log(`Full amount in tax: ${taxAmount}`)
console.log(`Half share: ${halfShare}`)