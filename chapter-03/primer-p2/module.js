import calcTaxAndSum, { calc } from './tax.js'
import {applyDiscount, printDetails} from './util.js'

class Product {
    constructor(name, price) {
        this.id = Symbol()
        this.name = name
        this.price = price
    }
}

let product = new Product('Hat', 100)
let taxedPrice = calc(product.price)
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`)

let products = [
    new Product('Gloves', 25),
    new Product('Hat', 100),
    new Product('Boots', 100),
]
let totalPrice = calcTaxAndSum(...products.map(p => p.price))
console.log(`Total price: ${totalPrice}`)

console.log('--------------------------------------------------------')

applyDiscount(product, 90)
printDetails(product)