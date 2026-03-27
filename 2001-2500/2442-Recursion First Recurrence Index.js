// https://edabit.com/challenge/bKp8TCCy5fmZGzRec

/*
Recursion: First Recurrence Index

Create a recursive function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced - entirely as an object; or an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

Examples
recurIndex("KDXTDATTDD") ➞ {"D": [1, 4]}
// D first appeared at index 1, resurfaced at index 4
//  though D resurfaced yet again at index 8, it's no longer significant
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("AKEDCBERSD") ➞ {"E": [2, 6]}

recurIndex("DXKETRETXD") ➞ {"E": [3, 6]}

recurIndex("ABCKPEPGBC") ➞ {"P": [4, 6]}

recurIndex("ABCDEFGHIJ") ➞ {}

recurIndex(undefined) ➞ {}
Notes
It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or hasn't fully understood the concept behind it before taking up this challenge or unless otherwise.
There will be no exceptions to handle, all inputs are strings and string-like objects. You just need to be extra careful on null, undefined and empty string inputs to avoid an Uncaught RangeError or exceededing the maximum call size of the stack.
A non-recursive version of this challenge can be found here.
If you think recursion is fun, you can find a collection of those challenges here.
*/
