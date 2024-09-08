class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    toString() {
        return `ToString: Name ${this.name}, Price: ${this.price}`
    }
}

function createProductIterator() {
    const hat = new Product('Hat', 100)
    const boots = new Product('Boots', 100)
    const umbrella = new Product('Umbrella', 23)

    let lastVal;

    return {
        next() {
            switch (lastVal) {
                case undefined:
                    lastVal = hat;
                    return { value: hat, done: false}
                case hat:
                    lastVal = boots
                    return { value: boots, done: false }
                case boots:
                    lastVal = umbrella
                    return { value: umbrella, done: false }
                case umbrella: {
                    return { value: undefined, done: true }
                }
            }
        }
    }
}

function* createProductGenerator() {
    yield new Product('Hat', 100)
    yield new Product('Boots', 100)
    yield new Product('Umbrella', 23)
}

let iterator = createProductGenerator()
let result = iterator.next()
while (!result.done) {
    console.log(result.value.toString())
    result = iterator.next()
}

console.log('----------------------------------------------');

[...createProductGenerator()].forEach(p => console.log(p.toString()))

class GiftPack {
    constructor(name, prod1, prod2, prod3) {
        this.name = name
        this.prod1 = prod1
        this.prod2 = prod2
        this.prod3 = prod3
    }
    getTotalPrice() {
        return [this.prod1, this.prod2, this.prod3]
            .reduce((total, p) => total + p.price, 0)
    }

    *getGenerator() {
        yield  this.prod1
        yield  this.prod2
        yield  this.prod3
    }

    *[Symbol.iterator]() {
        yield  this.prod1
        yield  this.prod2
        yield  this.prod3
    }
}
console.log('----------------------------------------------');

let winter = new GiftPack(
    'winter',
    new Product('Hat', 100),
    new Product('Boots', 80),
    new Product('Gloves', 25)
)

console.log(`Total price: ${winter.getTotalPrice()}`);


[...winter.getGenerator()].forEach(p => console.log(`Product: ${p}`))

console.log('----------------------------------------------');

[...winter].forEach(p => console.log(`Product: ${p}`))
