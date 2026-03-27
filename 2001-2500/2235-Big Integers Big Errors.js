// https://edabit.com/challenge/uKkGLkDZSAaRAxwya

/*
Big Integers, Big Errors

In this challenge, you have to create a class to deal with Big Integers. It will use just a single static method called max, used to find the Big Integer with the highest value among the given data.

You'll have to also manage a series of exceptions, establishing if the given input is valid:

A given Big Integer will always be valid.
A given integer lower or equal than the JS MAX_SAFE_INTEGER will be converted into a Big Integer (before calculating the max value).
A given string containing an integer lower or equal than the JS MAX_SAFE_INTEGER will be converted into a Big Integer (before calculating the max value).
If no input is given, the function must return null.
If none of the previous conditions are satisfied, the given input is not valid.

The max method applied to the input has to return:

If the input is valid, the highest given value as a Big Integer.
null if no input is given.
A string "Big Error" if the input contains invalid data.
Examples
Big.max(1n, 10n, 5n) ➞ 10n

Big.max("10", 5n, 1) ➞ 10n

Big.max() ➞ null

Big.max(2 ** 53 - 1) ➞ 9007199254740991n

Big.max(2 ** 53) ➞ "Big Error"

Big.max("10" / 3) ➞ "Big Error"

Big.max("10" / 2) ➞ 5n

Big.max(10 - 12, 10 - 10, 10 - 11) ➞ 0n

Big.max(0n) ➞ 0n

Big.max("") ➞ "Big Error"
Note
Reading the specific link about BigInt behaviors (look at the Resources tab) is highly recommended.
Inputs and values will be given in various ways trying to represent a real scenario. For coding easiness, tests are grouped separately.
*/
