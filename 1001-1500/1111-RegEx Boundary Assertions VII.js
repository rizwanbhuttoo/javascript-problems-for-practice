// https://edabit.com/challenge/mW3z9rJtR5gjcLpeu

/*
RegEx: Boundary Assertions VII

You are needed to finish a program that lists how many bad cookies are produced every day. A list of all the cookies produced for the day is given in an array. All that's needed is a regular expression that will make the function work correctly.

const cookies = ["bad cookie", "good cookie", "bad cookie", "good cookie", "good cookie"]

function badCookies(res) {
  const REGEXP = /* YOU FILL IN */
  return res.filter( x => REGEXP.test(x)).length
}

badCookies(res) // should output 2
Challenge
Write the regular expression to make the function output the correct number.
You're required to use a negative lookbehind assertion in your expression.
Notes

Check the Resources tab for details on negative lookbehind assertions.
*/
