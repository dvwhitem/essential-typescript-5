let hatPrice = 100
console.log(`Hat price ${hatPrice}`)
let bootPrice = '100'
console.log(`Boot price ${bootPrice}`)

if (hatPrice === bootPrice) {
    console.log('Same price')
} else {
    console.log('Difference price')
}
let totalPrice = Number(hatPrice) + Number(bootPrice)
console.log(`Total price: ${totalPrice}`)

let myVar = 'Roque'
console.log(`Type of myVar is ${typeof myVar}`)
myVar = 100
console.log(`Type of myVar is ${typeof myVar}`)

console.log(`TYpe of null is ${typeof null}`)

let firstCity = 'Manchester'
let secondCity = firstCity || 'London'
console.log(`City: ${secondCity}`)

let textRate
console.log(`Text rate: ${textRate ?? 10}%`)
textRate = 0
console.log(`Text rate: ${textRate ?? 10}%`)

