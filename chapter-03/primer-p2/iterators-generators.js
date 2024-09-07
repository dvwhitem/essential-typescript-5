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

[...createProductGenerator()].forEach(p => console.log(p.toString()))
