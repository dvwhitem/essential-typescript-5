let Product = function (name, price) {
    this.name = name
    this.price = price
}

Product.prototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`
}

let hat = new Product('Hat', 120)
let boots = new Product('Boots', 130)

console.log(hat.toString())
console.log(boots.toString())