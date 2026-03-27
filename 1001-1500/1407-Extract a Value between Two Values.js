// https://edabit.com/challenge/ZqLdW8smjmTQcLyHc

/*
Extract a Value between Two Values

Create a function that returns a RegEx that can be used to extract a value between two values. The two arguments are values that encapsule the value we want to extract.

Examples
"The red Car is fast".match(extractValueRegExp("The "," is fast"))[0] ➞ "red Car"

"We'll meet at 5am at the Circus".match(extractValueRegExp("We'll meet at "," at the Circus"))[0] ➞ "5am"

"I want a Lollipop".match(extractValueRegExp("want "," Lollipop"))[0] ➞ "a"
Notes

You must to use lookaheads and lookbehinds (see Resources for details).
*/
