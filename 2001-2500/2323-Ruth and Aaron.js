// https://edabit.com/challenge/YKvQKCnCdxPbjbmfD

/*
Ruth and Aaron

Two consecutive integers a and b are considered a Ruth-Aaron pair if the sum of the prime factors of a is equal to the sum of the prime factors of b.

Two definitions exist:

Summing up distinct prime factors. For example, 24 and 25 constitute a Ruth-Aaron pair by this definition. 8 and 9 do not.
P24 = [2, 3]  // sum = 5

P25 = [5]  // sum = 5, equal to 24

P8 = [2]  // sum = 2

P9 = [3]  // sum = 3
Summing up repeated prime factors. By this definition, 24 and 25 do not constitute a Ruth-Aaron pair. But 8 and 9 do.
P24 = [2, 2, 2, 3]  // sum = 9

P25 = [5, 5]  // sum = 10

P8 = [2, 2, 2]  // sum = 6

P9 = [3, 3]  // sum = 6, equal to 8

If two consecutive numbers have only distinct prime factors and have equal sums of prime factors, they are considered Ruth-Aaron pairs by both definitions.

P77 = [7, 11]  // sum = 18

P78 = [2, 3, 13]  // sum = 18

Create a function that takes a number n and returns:

false if it is not part of a Ruth-Aaron pair.
A 2-element array if it is part of a Ruth-Aaron pair.
The first element should be "Ruth" if n is the smaller number in the pair, or "Aaron" if it is the larger.
The second element should be 1 if n is part of a Ruth-Aaron pair under the first definition (sum of distinct prime factors), 2 if it qualifies by the second definition, 3 if it qualifies under both.
Examples
ruthAaron(5) ➞ ["Ruth", 3]

ruthAaron(25) ➞ ["Aaron", 1]

ruthAaron(9) ➞ ["Aaron", 2]

ruthAaron(11) ➞ false
Notes

N/A
*/
