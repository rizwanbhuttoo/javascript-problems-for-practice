// https://edabit.com/challenge/3rGuRbe8nZ3mXdBRN

/*
Learn Lodash: Write Your Own Version of Partition, Split an Array in Two

Write your own version of the lodash _.partition function. Partition receives a "collection", which can be an array or object, and a function that will check each item in the collection, it returns an array containing two arrays, one of the values that passed the check and the other with values that didn't.

const array = [{item: true}, {item: true}, {item: false}]
partition(array) ➞ [[{item: true}, {item: true}], [{item: false}]]
Arguments
collection (Array|Object): The collection to iterate over.
[check](Function): The function invoked per iteration.
Returns
(Array): Returns the array containing two arrays each holding either those that passed and those that didn't.

The function passed in can be a regular function, but it can also be what the lodash writers refer to as shorthand. Shorthand means that if a particular value is passed (e.g. a string or an array), the partition function will know to use a lodash helper function. For this challenge, you're permitted to import the helpers mentioned in the examples below.

Examples
const users = [
 { 'user': 'barney',  'age': 36, 'active': false },
 { 'user': 'fred',    'age': 40, 'active': true },
 { 'user': 'pebbles', 'age': 1,  'active': false }
];

Using just a normal function passed int.

_.partition(users, d => d.active; }) ➞ objects for [['fred'], ['barney', 'pebbles']]

Using the _.matches shorthand - just an object.

_.partition(users, { 'age': 1, 'active': false })
➞  objects for [['pebbles'], ['barney', 'fred']]

Using _.matchesProperty shorthand - an array representing a key-value pair.

_.partition(users, ['active', false]) 
➞ objects for [['barney', 'pebbles'], ['fred']]

Using _.property shorthand - just a string.

_.partition(users, 'active')
➞  objects for [['fred'], ['barney', 'pebbles']]
Notes

We've already written our own versions of these helpers property matchesProperty

Please don't import lodash, your challenge is to write your own version. I can write complicated checking functions to prevent you from importing lodash but it makes it can cause problems in the tests. If you do cheat and just import partition, everyone will be able to see it.
This entire series of challenges can be found here.
*/
