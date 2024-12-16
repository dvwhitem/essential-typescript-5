import {Person} from '../@types/person'

function printPerson( person: Person ) {
    console.log(person)
}

const person: Person = {
    age: 23,
    name: 'Clark'
}

printPerson(person)