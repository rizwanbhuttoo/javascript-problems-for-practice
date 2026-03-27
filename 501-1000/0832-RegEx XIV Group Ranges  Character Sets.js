// https://edabit.com/challenge/vqwqCwfJ3r4zFvzPn

/*
RegEx XIV: Group Ranges - Character Sets

Groups and ranges indicate groups and ranges of expression characters. Character Sets match any characters inside of brackets [ ]. You can specify a range of characters by using a hyphen.

/[abcd]/ === /[a-d]/

If the hyphen appears as the first or last character then it is considered a literal hyphen.

"non-profit".match(/[abc-]/g)  // "-"
"non-profit".match(/[-abc]/g)  // "-"

You can also use character classes in a character set. So instead of this:

/[A-Za-z0-9_-]/

You can do this:

/[\w]/

Create a regex to match the letter "x" followed by two characters, each of which may be any digit or any character from A to F. Case sensitive.

Examples
"Exception 0xAF".match(REGEXP) ➞ "xAF"

"Exception 0xD3".match(REGEXP) ➞ "xD3"

"Exception 0xd3".match(REGEXP) ➞ null

"Exception 0xZZ".match(REGEXP) ➞ null
Notes

Check the Resources tab if you get stuck.
*/
