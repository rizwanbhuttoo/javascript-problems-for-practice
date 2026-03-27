// https://edabit.com/challenge/Zf5a8fNYZ6hPJeXE4

/*
Convert an Arrow Function to a Regular Function

In JavaScript ES6 an arrow function expression is a syntactically compact alternative to a regular function expression.

Create a function that takes a string representing a function and converts between an arrow function and a regular function

If the input is a regular function, return an equivalent arrow function.
If the input is a arrow function, return an equivalent regular function.
Examples
// Function to arrow

"function () {}" ➞ "() => {}"

"function name() {}" ➞ "const name = () => {}"

"function name(str) { console.log(str); }" ➞ "const name = (str) => { console.log(str); }"
// Arrow to function

"() => {}" ➞ "function () {}"

"const name = () => {}" ➞ "function name() {}"

"let name = (str) => { console.log(str); }" ➞ "function name(str) { console.log(str); }"
Notes
The body of the function can be multiline.
Be careful with spaces, sometimes they're optional.
An arrow function can be declared using const / let / var or nothing at all. However, when converting a regular function to an arrow, always use const (unless you're dealing with an anonymous function).
*/
