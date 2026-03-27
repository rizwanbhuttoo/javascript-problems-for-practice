// https://edabit.com/challenge/PgkSgWqNZBwXTFgby

/*
Super Reduced String

Steve has a string of lowercase characters in range ascii[["a".."z"]]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation, he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, return "Empty String".

Case
superReducedString("aaabccddd") ➞ "abd"

Explanation:

"aaabccddd" -> "abccddd" -> "abddd" -> "abd"
Examples
superReducedString("cccxllyyy") ➞ "cxy"

superReducedString("aa") ➞ "Empty String"

superReducedString("baab") ➞ "Empty String"

superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"

superReducedString("chklssstt") ➞ "chkls"
Notes

N/A
*/
