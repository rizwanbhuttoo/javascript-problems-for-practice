// https://edabit.com/challenge/chDJCBDzZkjSExMwm

/*
Recursion: Exact Factorial Bounds

Create a recursive function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not an exact bound!".

Examples
isExact(6) ➞ [6, 3]

isExact(24) ➞ [24, 4]

isExact(125) ➞ "Not an exact bound!"

isExact(720) ➞ [720, 6]

isExact(1024) ➞ "Not an exact bound!"

isExact(40320) ➞ [40320, 8]
Notes
It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
There will be no exceptions to handle. All inputs are positive integers.
A recursive approach is prone to Uncaught RangeError or exceededing the maximum call size of the stack.
A non-recursive version of this challenge (of lesser difficulty and the total liberty of not using a recursive approach) can be found here.
If you think recursion is fun, you can find a collection of those challenges here.
*/
