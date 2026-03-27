// https://edabit.com/challenge/GRtrgMRRWJMk8QW2F

/*
Hill Cipher

In Hill Cipher, encoding is done by using the input string of a key and a message which are turned into matrices and then back to the encoded message.

Create a function that takes two arguments, key and message, and returns the encoded message.

Assign a unique number to each letter of the alphabet.

 a  b  c  d  e  f  g  h  i  j  k  l  m
 0  1  2  3  4  5  6  7  8  9  10 11 12
 n  o  p  q  r  s  t  u  v  w  x  y  z
 13 14 15 16 17 18 19 20 21 22 23 24 25

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

message = "H& *i"
key = "cats"

hillCipher(message, key) ➞ "OR"

Step 1: Create a 2 x 2 matrix of the given key (Length of the key will always be = 4). Convert the key row-wise into a 2x2 matrix and substitute the letters with their respective positions on the alphabet i.e., A=0, B=1, C=2 and so on:

key = "cats"

[[ 2  0]
 [19 18]]

// c = 2, a = 0, t = 19, s = 18

Step 2: Remove spaces and all characters other than alphabets from the given message:

"Hi"

Step 3: Break the message into pairs of two and convert those pairs into 2x1 matrices. If message length is an odd number then just add a Z at the end.

[[7]
 [8]]

// H = 7, i = 8

Step 4: Multiply both matrices and find out the modulo of 26 with the resultant matrix:

[[ 2  0]  *  [[7]  =  [[14]   =  [[14]  mod 26
 [19 18]]     [8]]     [277]]     [17]]

Step 5: Find out the alphabets at resultant matrix positions :

eMessage = "OR"

// 14 = O, 17 = "R"

See the below examples for a better understanding:

Examples
hillCipher("H& *i", "cats") ➞ "OR"

hillCipher("mubashir","matt") ➞ "OKMTIHSH"

hillCipher("Five + Seven = Twelve", "math") ➞ "IVSLIGSLAQEECSWR"
Notes
The text may contain both uppercase and lowercase alphabets. Standardize them and return the encrypted message in uppercase letters.
Key length will always be = 4.
*/
