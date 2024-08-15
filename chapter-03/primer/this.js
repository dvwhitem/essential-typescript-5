let myObject = {
    greeting: 'Hi, there',
    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`)
    },
    getWriter() {
        return (message) => console.log(`${this.greeting}, ${message}`)
    }
}

greeting = 'Hello' // see 'use strict'
myObject.writeMessage('It is so sunny today')
myObject.writeMessage.call(myObject, 'It is so sunny today')

myObject.writeMessage = myObject.writeMessage.bind(myObject) // good

let myFunction = myObject.writeMessage
myFunction('It is so sunny today')
myFunction.call(myObject, 'It is so sunny today') // bad

console.log('--------------------------------------------')

let writer = myObject.getWriter()
writer('It is raining today')

let standAlone = myObject.getWriter
let standAloneWriter = standAlone()
standAloneWriter('It is so sunny today')