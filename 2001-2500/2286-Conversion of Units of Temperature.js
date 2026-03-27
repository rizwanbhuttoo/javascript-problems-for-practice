// https://edabit.com/challenge/THSeSBBYKcKb6GRQe

/*
Conversion of Units of Temperature

Create a function that takes a temperature scale and a temperature measurement as arguments and returns an array with the conversion of such measurement to different scales.

Name	Input	Symbol
Celsius	cel	degC
Fahrenheit	fah	degF
Kelvin	kel	K
Rankine	ran	degR
Delisle	del	degDe
Newton	new	degN
Réaumur	rea	degRe
Rømer	rom	degRo

The resulting array should follow the order informed in the table above, and each corresponding temperature value should display two decimal digits.

Examples
temperature("cel", 0) ➞ ["0.00 degC", "32.00 degF", "273.15 K", "491.67 degR", "150.00 degDe", "0.00 degN", "0.00 degRe", "7.50 degRo"]

temperature("fah", -202) ➞ ["-130.00 degC", "-202.00 degF", "143.15 K", "257.67 degR", "345.00 degDe", "-42.90 degN", "-104.00 degRe", "-60.75 degRo"]

temperature("rom", 217.50) ➞ ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"]
Notes
Check the Resources tab to understand how to convert the measurement using different scales.
All measurements will be valid temperatures according to the scale.
*/
