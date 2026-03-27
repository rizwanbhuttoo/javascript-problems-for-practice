// https://edabit.com/challenge/x8ucw62XkGQkv9QdR

/*
Unusual Subtraction

Create a function that subtracts 1 from n (unless it ends in 0) k number of times. If n ends in 0, remove the 0.

To illustrate:

n = 22
k = 3

This means our number is 22 and we have to repeat the algorithm three times. 22 does not end in 0 so we continue subtracting 1.

22 - 1 = 21
k = 1
21 - 1 = 20
k = 2

Now 20 ends in 0, so we can remove it. We get 2; k = 3. The algorithm ends there because we applied it three times.

N:  K:
22
21  1
20  2
2   3
Examples
notGoodMath(540, 5) ➞ 50

notGoodMath(1000000000, 9) ➞ 1

notGoodMath(42023110, 10) ➞ 4201
Notes

N/A
*/
