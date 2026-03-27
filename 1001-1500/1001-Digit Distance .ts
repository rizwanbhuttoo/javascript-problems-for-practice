// https://edabit.com/challenge/aeYjmvYD5YmmA9Dso

/*
Digit Distance

The digit distance between two numbers is the total value of the difference between each pair of digits.

To illustrate:

digitDistance(234, 489) ➞ 12
// Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5

Create a function that returns the digit distance between two integers.

Examples
digitDistance(121, 599) ➞ 19

digitDistance(12, 12) ➞ 0

digitDistance(10, 20) ➞ 1
Notes
Both integers will be exactly the same length.
All digits in num2 have to be higher than their counterparts in num1.
*/

function digitDistance1(num1: number, num2: number): number {
  let distance = 0;
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  for (let i = 0; i < num1Str.length; i++) {
    distance += Math.abs(Number(num1Str[i]) - Number(num2Str[i]));
  }
  return distance;
}

console.log(digitDistance1(121, 599));
console.log(digitDistance1(12, 12));
console.log(digitDistance1(10, 20));
