// https://edabit.com/challenge/tz9fpwkfL6ppJKC5m

/*
Find the Secret Word

This string, "sadbpstcrdvaefikkgoenqrt" has a five letter word embedded within it.

Here's a clue on how to find it:

The str can be broken up from left to right into a series of overlapping letter triplets.
The letter values for each triplet are summed with a=1, b=2, ..., z=26.
The values of the triplets that contain the letters of the secret word as the middle member form an increasing arithmetic series.

Given the str and len of the secret word, improvise a function that finds the secret word.

Examples
secretWord("sadbpstcrdvaefikkgoenqrt", 5) ➞ "brake"
// sa(dbp)st(crd)(vae)f(ikk)g(oen)qrt
// The values of the triplets in parentheses are 22, 25, 28, 31, 34.
// An arithmetic series with difference of 3.

secretWord("aheiayd", 3) ➞ "hey"
// (a[he)i](ayd)
// The triplets with the secret letters can overlap.
// ahe=14, hei=22, ayd=30; a series with a difference of 8.
Notes

N/A
*/
