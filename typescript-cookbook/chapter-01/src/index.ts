import {Person} from '../@types/person'

/**
 * @param {Person} person
 */
function printPerson( person: Person ) {
    console.log(person)
}

const person: Person = {
    age: 23,
    name: 'Clark'
}

// @ts-expect-error
printPerson(123)