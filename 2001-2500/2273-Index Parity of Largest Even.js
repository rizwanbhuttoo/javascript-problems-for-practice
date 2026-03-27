// https://edabit.com/challenge/rwWaie7W2jmHQFfJA

/*
Index Parity of Largest Even

Write a function that returns the largest even integer in an array with its corresponding index and the parity of that index, but determining the parity of that index is limited to not using the modulo operator %.

Output Structure

You have to return an Object.

{"@odd|even index " + index_of_largest: largest_integer}
Examples
bitwiseIndex([107, 19, 36, -18, -78, 24, 97]) ➞ {"@even index 2": 36}

bitwiseIndex([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@even index 6": 10}

bitwiseIndex([4, 4, 4, 4, 4, 4]) ➞ {"@even index 0": 4}

bitwiseIndex([-31, -7, -13, -7, -9, -13]) ➞ "No even integer found!"
Notes
The use of indexOf() and max() are restricted.
If there are no even integers, return "No even integer found!".
The set of limitations imposed on this challenge dictates the level of difficulty.
Another version of this challenge that deals with recursion can be found here.
*/
