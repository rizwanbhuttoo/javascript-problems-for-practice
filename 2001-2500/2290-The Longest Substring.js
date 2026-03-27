// https://edabit.com/challenge/7k59Z9bk46uKH9og3

/*
The Longest Substring

Given a string of letters, create a function that returns an array with the separator that yields the longest possible substring, provided that:

The substring starts and ends with the separator.
The separator doesn't occur inside the substring other than at the ends.

If two or more separators yield substrings with the same length, they should appear in alphabetical order.

Examples
maxSeparator("supercalifragilistic") ➞ ["s"]
// The longest substring is "supercalifragilis".

maxSeparator("laboratory") ➞ ["a", "o", "r"]
// "abora", "orato" and "rator" are the same length.

maxSeparator("candle") ➞ []
// No possible substrings.
Notes
All substrings should be at least of length 2 (i.e. no single-letter substrings).
Expect lowercase alphabetic characters only.
*/
