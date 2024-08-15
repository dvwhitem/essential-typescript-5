let hat = {
    name: 'Hat',
    price: 100,
}
let boots = {
    name: 'Boots',
    price: '100'
}
let gloves = {
    productName: 'Gloves',
    price: '40'
}
gloves.name = gloves.productName
gloves.price = 40
delete gloves.productName

let sumPrices = (...numbers) => numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val)))

let totalPrice = sumPrices(hat.price, boots.price, gloves.price)
console.log(`Price: ${totalPrice} type: ${typeof totalPrice}`)

for(let [key, value] of Object.entries(gloves)) {
    console.log(`${key}: ${value} (${typeof value})`)
}

let propertyCheck = hat?.oldPrice ?? 0
let objectAndPropertyCheck = hat?.oldPrice ?? 0
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`)

console.log('-------------------------------------------')

let additionalProperties = {...hat, discount: true}
console.log(`Additional: ${JSON.stringify(additionalProperties)}`)

let replaceProperties = {...hat, price: 50}
console.log(`Replace: ${JSON.stringify(replaceProperties)}`)

let {price, ...someProperties} = hat
console.log(`Selected: ${JSON.stringify(someProperties)}`)