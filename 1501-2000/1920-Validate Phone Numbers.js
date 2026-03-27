// https://edabit.com/challenge/LQvRrzwHzc2BAXBQx

/*
Validate Phone Numbers

Write a function that returns true if the phone number is in a valid format. Valid formats are as follows:

With Country Code	Without Country Code
+1-892-445-7663	892-445-7663
1-892-445-7663	(892) 445-7663
1 (892) 445-7663	892.567.8901
1.892.567.8901	1/892/567/8901
1 892 567 8901	892/567/8901
18925678901	892 567 8901
Examples
validate("578-332-1114") ➞ true

validate("57-332-1114") ➞ false

validate("577 332  1114") ➞ false
// More than one space in between digits clusters.

validate("57 332 1114") ➞ false
// Unacceptable digit cluster length.

validate("157%332-1114") ➞ false
// Unacceptable delimiter.
Notes
The country code will always be +1 or 1.
Each phone number will contain either 10 or 11 digits (depending on whether the country code exists).
There must either be exactly one space, a delimiter, or no space at all between the digit clusters.
You do not have to worry about extensions.
*/
