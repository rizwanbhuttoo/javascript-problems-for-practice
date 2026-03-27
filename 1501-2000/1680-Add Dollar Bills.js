// https://edabit.com/challenge/74z6ajLYX4oLAF5zb

/*
Add Dollar Bills

Create a function that takes a string containing money in dollars and pounds sterling (seperated by comma) and returns the sum of dollar bills only, as an integer.

For the input string:

Each amount is prefixed by the currency symbol: $ for dollars and £ for pounds.
Thousands are represented by the suffix k.

i.e. $4k = $4,000 and £40k = £40,000

Examples
addBill("$20, £40, £60, $50") ➞ 70
// 20 + 50 = 70

addBill("£30, $20, £60, $150, £360") ➞ 170
// 20  + 150 = 170

addBill("£30, $2k, £60, $200, £360") ➞ 2200
// 2 * 1000 + 200 = 2200
Notes

There is at least one dollar bill in string.
*/
