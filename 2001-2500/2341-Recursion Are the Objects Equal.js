// https://edabit.com/challenge/d8BiMfrtcyyzq23MM

/*
Recursion: Are the Objects Equal?

Create a function that recursively checks if each and every element in the first object is similar to that of the second object's (i.e. type, value, index, key, etc.), returns true if it is and false otherwise.

Objects referred to in this challenge are instances of Array, Map, or Object. An object's element can be another object within another object and so on. Whilst this challenge can be equivocally easy with JSON.stringify, it is humbly by the author's intent that the concept of recursion is imposed.

Examples
isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]) ➞ true

isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]}) ➞ false

isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false}) ➞ false

isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}]) ➞ true
Notes
You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
If you think recursion is fun, you can find a collection of those challenges in here.
*/
