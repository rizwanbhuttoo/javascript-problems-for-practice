// https://edabit.com/challenge/3G5P56u9nWW4uf5Cj

/*
Keyword Cipher

A Keyword Cipher is a monoalphabetic cipher that uses a keyword to provide encryption on the given string of the message.

Create a function that takes two arguments: a string message and a string key, and returns an encoded message.

For the encryption key, the keyword is placed at the beginning, followed by the rest of the characters in the alphabet in order (in other words, with the keyword characters removed):

A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z

The encrypted message substitutes each plaintext character with the encryption key character in the corresponding position.

Return the given message encrypted against the key:

message = "ABCHIJ"
key = "KEYWORD"

keywordCipher(key, message) ➞ "KEYABC"
// A = K, B = E, C = Y, H = A, I = B, J = C
Examples
keywordCipher("keyword", "abchij") ➞ "keyabc"

keywordCipher("purplepineapple", "abc") ➞ "pur"

keywordCipher("mubashir", "edabit") ➞ "samucq"
Notes
Don't forget to remove duplicates after concatenating the string with the keyword.
Non-alphabetic characters must be left as they are.
*/
