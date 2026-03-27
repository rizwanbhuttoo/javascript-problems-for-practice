// https://edabit.com/challenge/y3e9Xdemxr65JQFX8

/*
Happy Number

A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. If such a process results in an endless cycle of numbers containing 4, the number is said to be an unhappy number.

Sample computation:

139 = 1^2 + 3^2 + 9^2 = 1 + 9 + 81 = 91
91 = 9^2 + 1^2 = 81 + 1 = 82
82 = 8^2 + 2^2 = 64 + 4 = 68
68 = 6^2 + 8^2 = 36 + 64 = 100
100 = 1^2 + 0^2 + 0^2 = 1 + 0 + 0 = 1

We stopped at 1 (because continuing it will be an endless cycle), thus, 139 is a happy number.

67 = 6^2 + 7^2 = 36 + 49 = 85
85 = 8^2 + 5^2 = 64 + 25 = 89
89 = 8^2 + 9^2 = 64 + 81 = 145
145 = 1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
42 = 4^2 + 2^2 = 16 + 4 = 20
20 = 2^2 + 0^2 = 4 + 0 = 4

We stopped at 4 (because continuing it will be an endless cycle), thus, 67 is an unhappy number.

Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.

Examples
isHappy(67) ➞ false

isHappy(89) ➞ false

isHappy(139) ➞ true

isHappy(1327) ➞ false

isHappy(2871) ➞ false

isHappy(3970) ➞ true
Notes
Hint: Your loop terminates if the value of n is either 1 or 4.
Optionally, you can solve this challenge via a recursive approach.
A recursive version of this challenge can be found here.
*/
