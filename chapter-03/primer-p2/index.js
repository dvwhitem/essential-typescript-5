let hat = {
    name: "Hat",
    price: 100,
    getPriceincTax() {
        return Number(this.price) * 1.2;
    }
}

console.log(`Hat: ${hat.price}, ${hat.getPriceincTax()}`)
console.log(`To String: ${hat.toString()}`)