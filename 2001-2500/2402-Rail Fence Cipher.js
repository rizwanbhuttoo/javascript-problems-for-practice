// https://edabit.com/challenge/ec8rWmKhhqAFkeFfa

/*
Rail Fence Cipher

In Rail Fence Cipher encoding is done by placing each character successively in a diagonal along with a set of rails.

Create a function that takes two arguments; a string and the number of rails, and returns the encoded message.

message = "WEAREDISCOVEREDFLEEATONCE"
rails = 3

railFenceCipher(message, rails) ➞ "WECRLTEERDSOEEFEAOCAIVDEN"

In the above example, the given message to be decomposed in 3 rails:

W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C
    A       I       V       D       E       N

Starting from the upper line, the encoded message will be:

"WECRLTEERDSOEEFEAOCAIVDEN"
Examples
railFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) ➞ "WECRLTEERDSOEEFEAOCAIVDEN"

railFenceCipher("EDABITISAMAZING", 4) ➞ "EIIDTSZNAIAAGBM"

railFenceCipher("WEWILLALLDIEONEDAY", 3) ➞ "WLLOAEILLDENDYWAIE"
Notes

Rails will be >=2
*/
