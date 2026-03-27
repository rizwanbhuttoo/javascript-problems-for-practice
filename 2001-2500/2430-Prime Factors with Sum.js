// https://edabit.com/challenge/kX9QaNzcot3kN9DKx

/*
Prime Factors with Sum

Create a function that takes an array of positive integers and returns a string as:

p1, sum of all ij of the array for which p1 is a prime factor,
p2, sum of all ij of the array for which p2 is a prime factor, ... ,
pn, sum of all ij of the array for which pn is a prime factor.
Examples
sumPrime([12, 15]) ➞ "(2 12)(3 27)(5 15)"
// 2 is a prime factor of 12 results (2 12).
// 3 is a prime factor of 12 and 15, add 15 + 12, results (3 27).
// 5 is a prime factor of 15 results (5 15).
// 7, 11 and 13 are prime numbers but not a factor of any of the number
// in the given array.

sumPrime([7, 13, 18, 23, 24]) ➞ "(2 42)(3 42)(7 7)(13 13)(23 23)"

sumPrime([3, 5, 7, 9, 11, 13]) ➞ "(3 12)(5 5)(7 7)(11 11)(13 13)"
Notes

N/A
*/
