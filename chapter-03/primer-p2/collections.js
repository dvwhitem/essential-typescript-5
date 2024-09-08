class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    toString() {
        return `ToString: Name ${this.name}, Price: ${this.price}`
    }
}

let data = {
    hat: new Product('Hat', 100)
}
data.boots = new Product('Boots', 100)

Object.keys(data)
    .forEach(key =>
        console.log(`Key: ${key} Value: ${data[key].toString()}`)
    )

