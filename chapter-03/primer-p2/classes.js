class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`
    }
}

class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2) {
        super(name, price)
        this.taxRate = taxRate
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate
    }

    toString() {
        let chainResult =  super.toString()
        return `${chainResult}, Tax: ${this.#getDetail()}`
    }

    static process(...products) {
        products.forEach(p => console.log(p.toString()))
    }

    #getDetail() {
        return `Tax: ${this.getPriceIncTax()}`
    }
}

TaxedProduct.process(
    new TaxedProduct('Hat', 200, 1.2),
    new TaxedProduct('Boots', 200, 1.4)
)


let hat = new TaxedProduct('Hat', 140)
let boots = new TaxedProduct('Boots', 100, 1.2)

console.log(hat.toString())
console.log(boots.toString())