// function sumPrices(first, second, third = 0) {
//     return first + second + third
// }

let sumPrices = (...numbers) => numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val)))

let hatPrice = 100
console.log(`Hat price: (${typeof hatPrice}) ${hatPrice}`)
let bootsPrice = '100'
console.log(`Boots price: (${typeof bootsPrice}) ${bootsPrice}`)

let totalPrice = sumPrices(hatPrice, bootsPrice)
console.log(`Total Price ${totalPrice} (${typeof totalPrice})`)

totalPrice = sumPrices(100, 200, 300)
console.log(`Total Price ${totalPrice} (${typeof totalPrice})`)

totalPrice = sumPrices(100, 200)
console.log(`Total Price ${totalPrice} (${typeof totalPrice})`)

totalPrice = sumPrices(100, 200, 400, 'test', null, undefined, false)
console.log(`Total Price ${totalPrice} (${typeof totalPrice})`)

console.log(`Number (null): ${Number(null)}`)
console.log(`Number (false): ${Number(false)}`)
console.log(`Number ('test'): ${Number('test')}`)
console.log(`Number (undefined): ${Number(undefined)}`)
console.log(`Number (0) ? ${Number(0)}`)