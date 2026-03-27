// https://edabit.com/challenge/6XKsAq8yT7gHex75i

/*
ES6 Object Methods in ES5

In ES6 JavaScript, there exist two Object methods:

Object.prototype.entries() takes a single object as an argument, and returns an array. In this array are arrays with the name of every property of the object, and the value of the property.
Object.prototype.values() also takes a single object as an argument, and returns an array. In this array are the values of every property of the object.
Examples
const myObject = {
  a: 1,
  b: 2
}

Object.entries(myObject) ➞ [ ["a", 1], ["b", 2] ]
Object.values(myObject) ➞ [1, 2]

Your job is to recreate these Object methods in ES5 JavaScript, creating new methods:

Object.prototype.entriesNew()
Object.prototype.valuesNew()

The methods you create should return the same values as Object.prototype.entries() and Object.prototype.values(), and should adhere to ES5 limits. If the object has no properties your methods should return an empty array.

Examples
Object.valuesNew({ a: 1, b: 2 }) ➞ [1, 2]

Object.entriesNew({ first: 1, second: 2 }) ➞ [ ["first", 1], ["second", 2] ]

Object.valuesNew({}) ➞ []

Object.entiresNew({}) ➞ []
Notes
Do not use ES6 Object methods.
Do not use ES6 features like arrow functions or let.
*/
