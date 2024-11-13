export function sum(...vals: number[]): number {
    return vals.reduce((total, value) => total + value)
}