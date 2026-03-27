// https://edabit.com/challenge/zC3QSpm57nHYvr956

/*
Special String

A string is said to be a "special" string if either of two conditions are met:

All of the characters are the same (e.g. "aaa").
All characters, except the middle one, are the (e.g. "aadaa").

A special substring is any substring of a string that meets one of those criteria. Given a string, determine how many special substrings can be formed from it.

Given the string s = "mnonopoo" we have the following special substrings:

[ "m", "n", "o", "n", "o", "p", "o", "o", "oo", "non", "ono", "opo" ]

You just have to return the total number of that special substrings. In this case, it is 12. Another example is s = "aaaa", so the substrings will be:

[ "a", "a", "a", "a", "aa", "aa", "aa", "aaa", "aaa", "aaaa" ]
// The function will return 10
Examples
specialString("mnonopoo") ➞ 12

specialString("asasd") ➞ 7

specialString("aaaa") ➞ 10
Notes

N/A
*/
