// https://edabit.com/challenge/evbaerriFzL6GBgSo

/*
Recursive Digit

We define super digit of an integer x using the following rules:

If x has only 1 digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

For example, the super digit of x will be calculated as:

  superDigit(9875)    9+8+7+5 = 29
  superDigit(29)      2 + 9 = 11
  superDigit(11)      1 + 1 = 2
  superDigit(2) = 2

You are given two numbers n and k. The number p is created by concatenating the string n, k times. Continuing the above example where n = 9875, assume your value k=4. Your initial p = 9875 9875 9875 9875 (spaces added for clarity).

superDigit(p) = super_digit(9875987598759875)
  5+7+8+9+5+7+8+9+5+7+8+9+5+7+8+9 = 116

superDigit(p) = super_digit(116)
  1+1+6 = 8

superDigit(p) = super_digit(8)

All of the digits of p sum to 116. The digits of 116 sum to 8. 8 is only one digit, so it's the super digit.

Complete the super_digit() method. It must return the calculated super digit as an integer.

superDigit has the following parameter(s):

n: a string representation of an integer.
k: an integer, the times to concatenate n to make p.
Examples
superDigit("148", 3) ➞ 3

superDigit("123", 3) ➞ 9

superDigit("99999999999999999999999999", 104500) ➞ 9
Notes

N/A
*/
