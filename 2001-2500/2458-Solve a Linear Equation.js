// https://edabit.com/challenge/aSYCTj8MkkNfib3XC

/*
Solve a Linear Equation

The function is given a string representing a linear equation with one unknown. Find the value of x that is a valid solution of the equation. Return the sting x=val. Three outcomes are possible:

x_val is an integer or a float (round x_val to 2 decimals)
"Infinite solutions" for situations 0*x=0
"No solution" for situations 0*x=num, (num != 0)
Examples
findX("4x-7=x+11") ➞ "x=6"

findX("3x=2x+x") ➞ "Infinite solutions"

findX("3x=3x+2") ➞ "No solution"

findX("-1-2x=15+x") ➞ "x=-5.33"
Notes
It is a good exercise for using Regex to find all numbers and coefficients of x.
All numbers have at most 3 digits.
*/
