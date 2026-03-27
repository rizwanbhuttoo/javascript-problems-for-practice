// https://edabit.com/challenge/hQtRsdNykZgNEZp9J

/*
RegEx: Boundary Assertions VI

You're needed to finish a program that lists how many tall people work in your company. All that is needed is a regular expression that will make the function work correctly.

const res = ["tall height", "tall height", "short height", "medium height", "tall height"]

function countTall(res) {
  const REGEXP = /* YOU FILL IN */
  return res.filter( x => REGEXP.test(x)).length
}

countTall(res) // should output 3

Write the regular expression to make the function output the correct number. You're required to use a positive lookbehind assertion in your expression.

Notes

Check the Resources tab for details on lookbehind assertions.
*/
