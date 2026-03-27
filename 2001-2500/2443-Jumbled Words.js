// https://edabit.com/challenge/soifmDAvLsbic9vXH

/*
Jumbled Words

For this challenge, you are given a string of letters in alphabetical order and an index. If a list of all the permutations of those letters are put in lexicographical order, a legitimate word is located at the given index. You are to identify that word.

For example:

jumble("isn", 4) ➞ sin"

The permutations are:

["ins", "isn", "nis", "nsi", "sin", "sni"]

The permutation at index 4 is "sin".

Examples
jumble("em", 1) ➞ "me"

jumble("aiv", 5) ➞ "via"

jumble("abdeit", 408) ➞ "edabit"

jumble("abdeit", 137) ➞ "baited"

jumble("abefgilnoruv", 425933017) ➞ "unforgivable"
Notes
The test case words are heterographs (i.e. all the letters are different).
It is too time-consuming to generate every permutation for some of the longer words (check the Resources tab for another way).
*/
