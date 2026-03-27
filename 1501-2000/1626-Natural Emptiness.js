// https://edabit.com/challenge/v8kd5jW9SG3uHZWNd

/*
Natural Emptiness

In abstract set theory, a construction due to von Neumann represents the natural numbers by sets, as follows:

0 = [ ] is the empty set
1 = 0 ∪ [ 0 ] = [ 0 ] = [ [ ] ]
2 = 1 ∪ [ 1 ] = [ 0, 1 ] = [ [ ], [ [ ] ] ]
n = n−1 ∪ [ n−1 ] = ...

Write a function that receives an integer n and produces the representing set.

Examples
repSet(0) ➞ []

repSet(1) ➞ [[]]

repSet(2) ➞ [[], [[]]]

repSet(3) ➞ [[], [[]], [[], [[ ]]]]
Notes
Make sure to use array brackets [,].
A neat feature of this representation is that n < m precisely if the set representing n is contained in the set representing m.
*/
