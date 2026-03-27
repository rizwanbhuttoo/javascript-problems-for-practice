// https://edabit.com/challenge/BdJWELgsSr5nktqAG

/*
RegEx XVIII : Quantifiers - Control greed quantifiers with ?

Quantifiers indicate numbers of characters or expressions to match. By default quantifiers like * and + are "greedy", meaning that they try to match as much of the string as possible. The ? character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match.

"some <foo> <bar> new </bar> </foo> thing".match(/<.*>/) ➞ "<foo> <bar> new </bar> </foo>"
"some <foo> <bar> new </bar> </foo> thing".match(/<.*?>/) ➞ "<foo>"

Find all HTML comments in the text. Use the ? in your expression.

let str = `... <!-- My -- comment test --> ..  <!----> .. `;

str.match(regexp) ➞ "<!-- My -- comment test -->", "<!---->"
Notes

Check the Resources if you get stuck.
*/
