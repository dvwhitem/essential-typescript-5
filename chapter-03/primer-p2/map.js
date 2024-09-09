class Product {
    constructor(name, price) {
        this.id = Symbol()
        this.name = name
        this.price = price
    }

    toString() {
        return `ToString: Name ${this.name}, Price: ${this.price}`
    }
}

class Supplier {
    constructor(name, productIds) {
        this.name = name
        this.productsIds = productIds
    }
}


let map = new Map()
map.set('hat', new Product('Hat', 100));
map.set('boots', new Product('Boots', 100))

console.log('-----------------------------------------');

[...map.keys()].forEach(key => console.log(map.get(key).toString()))


let acmeProducts = [
    new Product('Hat', 100),
    new Product('Boots', 100)
]
let zoomProduct = [
    new Product('Hat', 100),
    new Product('Boots', 100)
]

let products = new Map()
console.log('-----------------------------------------');
[...acmeProducts, ...zoomProduct]
    .forEach(p => products.set(p.id, p))
let suppliers = new Map();
suppliers.set('acme', new Supplier('Acme Co', acmeProducts.map(p => p.id)))
suppliers.set('zoom', new Supplier('Zoom Shoes', zoomProduct.map(p => p.id)))
suppliers.get('acme').productsIds.forEach(id =>
    console.log(`Name: ${products.get(id).name}`)
)