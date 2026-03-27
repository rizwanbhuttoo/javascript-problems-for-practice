// https://edabit.com/challenge/Pb6JrAEsFbizx7Ssz

/*
String Compression from Character Array

The function is given an array of characters. Compress the array into a string using the following rules. For each group of consecutively repeating characters:

If the number of repeating characters is one, append the string with only this character.
If the number n of repeating characters x is greater than one, append the string with "x" + n.
Examples
compress(["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"]) ➞ "te14s3h"

compress(["a", "a", "b", "b", "c", "c", "c"]) ➞ "a2b2c3"

compress(["a"]) ➞ "a"

compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]) ➞ "ab12"

compress(["a", "a", "a", "b", "b", "a", "a"]) ➞ "a3b2a2"
Notes
A recursive version of this challenge can be found via this link
*/
