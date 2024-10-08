import {calc} from './tax.js'

export function printDetails(product) {
    let taxedPrice = calc(product.price)
    console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`)
}

export function applyDiscount(product, discount = 5) {
    product.price = product.price - discount
}