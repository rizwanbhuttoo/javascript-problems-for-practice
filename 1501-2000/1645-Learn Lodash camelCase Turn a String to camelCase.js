// https://edabit.com/challenge/fdfdgjo6vFYSunMdr

/*
Learn Lodash: _.camelCase, Turn a String to camelCase

According to the lodash documentation, _.camelCase turns a string into camelcase. Your task is to recreate lodash's camel case with your own function using vanilla JavaScript.

There is already a camel case challenge on Edabit but lodash's version is much more robust. It can tell if a string is already camel case and if so it just returns the string. It can also handle numbers and capitalized letters that are next to one another.

Use Case

Sometimes I want to create a new variable with a name that is a combination of other variable names. Say I want to know user1's date of birth and I have two variables, user1 and dateOfBirth. If I combine them I get user1dateOfBirth which is an invalid format for my application. I would use _.startCase("user1" + "dateOfBirth") and I would get user1DateOfBirth.

Examples
camelCase("Foo Bar") ➞ "fooBar"

camelCase("--foo-bar--") ➞ "fooBar"

camelCase("__FOO_BAR__") ➞ "fooBar"
Notes
Do not attempt to import lodash; you are simply writing your own version.
This entire series of challenges can be found here.
*/
