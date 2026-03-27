// https://edabit.com/challenge/Q2u5rqbQ3AA3B2tFA

/*
Spartans Cipher

In Spartans Cipher, encoding is done by writing the text horizontally, across the strap in the plaintext word of a message. In ancient times, Spartans and Greeks invented an interesting way of encryption called Scytale.

The ancient Greeks, and the Spartans in particular, are said to have used this cipher to communicate during military campaigns.

Create a function that takes two arguments, a number of slides nSlide and a string message, and returns the encoded message.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

message = "Mubashir Scytale Code"
nSlide = 6

spartansCipher(message, nSlide) ➞ "Ms t euhSaC biclo aryed"

Step 1: Imagine this Scytale:

Step 2: You can write the given message on a 6 slide Scytale like this:

| M | u | b | a |
| s | h | i | r |
|   | S | c | y |
| t | a | l | e |
|   | C | o | d |
| e |   |   |   |

Step 3: Encode the message column-wise:

"Ms t euhSaC biclo aryed "

Step 4: Trim all spaces at the end and return the final encoded message:

"Ms t euhSaC biclo aryed"

See the below examples for a better understanding:

Examples
spartansCipher("Mubashir Scytale Code", 6) ➞ "Ms t euhSaC biclo aryed"

spartansCipher("Matt and Edabit are amazing", 8) ➞ "M  baai aaEirmn tndteag tda  z"

spartansCipher("", 99) ➞ ""
Notes

N/A
*/
