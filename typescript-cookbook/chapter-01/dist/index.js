"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Person} person
 */
function printPerson(person) {
    console.log(person);
}
const person = {
    age: 23,
    name: 'Clark'
};
// @ts-expect-error
printPerson(123);
