// https://edabit.com/challenge/7RBuf27avn8QNigQA

/*
[Color Conversion] RGB to HEX and HEX to RGB

Create a function, that can convert RGB to HEX if the passed value is an object, or HEX to RGB if the value is a string.

colorConversion("string") will convert HEX to RGB.
colorConversion({r: 235, g: 64, b: 52}) will convert RGB to HEX.
Rules
If "R", "G" or "B" value is not between 0 and 255, return "Not valid input".
If the first character in the HEX string is a hash (#), then the string must not have more than 7 characters, else if it doesn't have the hash, it must not have more than 6 chraracters. If it isn't, return "Not valid input".
The output HEX value, must have this syntax: "#HEXVAL".
The output RGB value, must have this syntax (object): { r: NUM, g: NUM, b: NUM }
Examples
colorConversion("#ffffff") ➞ {r: 255, g: 255, b: 255}

colorConversion("#ff0025") ➞ {r: 255, g: 0, b: 37}

colorConversion({r: 40, g: 200, b: 125}) ➞ "#28c87d"
Notes
If the number in R, G or B is less than 10, the HEX code must have a "0" before it; R, G and B values have to be numbers, not strings.
The HEX value (output) have to be lower case only (i.e. correct: #ffffff, wrong: #FFFFFF).
*/
