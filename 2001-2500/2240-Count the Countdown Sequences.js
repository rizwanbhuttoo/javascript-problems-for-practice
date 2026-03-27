// https://edabit.com/challenge/HW4ZzYmDaASKfwdq6

/*
Count the Countdown Sequences

A countdown sequence is a descending sequence of k integers from k down to 1 (e.g. 5, 4, 3, 2, 1). Write a function that returns an array of the form[x, y] where x is the number of countdown sequences in the given array and y is the array of those sequences in the order in which they appear in the array.

Examples
finalCountdown([4, 8, 3, 2, 1, 2]) ➞ [1, [[3, 2, 1]]]
// 1 countdown sequence: 3, 2, 1

finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]) ➞ [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
// 2 countdown sequences:
// 5, 4, 3, 2, 1 and 3, 2, 1

finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]) ➞ [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
// 3 countdown sequences:
// 4, 3, 2, 1 ; 3, 2, 1 and 1

finalCountdown([1, 1, 2, 1]) ➞ [3, [[1], [1], [2, 1]]]

finalCountdown([]) ➞  [0, []]
Notes
A disjoint 1 is a valid countdown sequence. See examples #3 & #4.
All numbers in the array will be greater than 0.
*/
