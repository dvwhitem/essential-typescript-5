export function calc(price) {
    return Number(price) * 1.2
}

export default function calcTaxAndSum(...prices) {
    return prices.reduce((total, p) => total += calc(p), 0)
}