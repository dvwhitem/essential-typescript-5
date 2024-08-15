let names = ['Hat', 'Boots', 'Gloves']
let prices = []

prices.push(100)
prices.push('200')
prices.push(50.25)

console.log(`First item: ${names[0]}: ${prices[0]}`)

let sumPrices = (...numbers) => numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val)))

let total = sumPrices(...prices)
console.log(`Total: ${total} type: ${typeof total}`)