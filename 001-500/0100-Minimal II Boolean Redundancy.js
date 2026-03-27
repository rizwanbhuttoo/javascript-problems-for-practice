// https://edabit.com/challenge/gNMo9HagBZpWyAoNS

/*
Minimal II: Boolean Redundancy

Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section down below.

Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.

Tips

Converting a boolean, or something that will ultimately be interpreted as a boolean, into a boolean is redundant.

For example, the code:

let bool = Boolean(x < 4)
return bool === true

Is equivalent to simply:

return x < 4
A comparison with <, <=, ===, !==, >=, > will always result in a boolean, therefore using the function Boolean() is totally unnecessary.
bool === true is redundant, as it will always return bool.
To obtain the opposite of bool we could use bool === false. However, a much cleaner way of doing this is simply !bool.
While preserving readability, avoid declaring unnecessary variables.
Notes
This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in Comments.
*/
