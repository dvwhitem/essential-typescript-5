let Product = function (name, price) {
    this.name = name
    this.price = price
}

Product.prototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`
}

let TaxedProduct = function (name, price, taxRate) {
    Product.call(this, name, price)
    this.taxRate = taxRate
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype)

TaxedProduct.prototype.getPriceIncTax = function () {
    return Number(this.price) * this.taxRate
}

TaxedProduct.prototype.toTaxString = function () {
    let chainResult = Product.prototype.toString.call(this)
    return `${chainResult}, Tax: ${this.getPriceIncTax()}`
}

let hat = new TaxedProduct('Hat', 100, 1.5)
let boots = new Product('Boots', 180)

console.log(hat.toTaxString())
console.log(boots.toString())
console.log(`hat and TaxedProduct: ${hat instanceof TaxedProduct}`)
console.log(`hat and Product: ${hat instanceof Product}`)
console.log(`boots and TaxedProduct: ${boots instanceof TaxedProduct}`)
console.log(`boots and Product: ${boots instanceof Product}`)