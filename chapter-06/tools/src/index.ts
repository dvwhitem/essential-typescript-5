import {sum} from './calc'

let printMessage = (msg: string): void =>
    console.log(`Message: ${msg}`)

let message = ("Hello, TypeScript")
printMessage(message)

debugger

let total = sum(123, 127, 300)
console.log(`Total: ${total}`)