// https://edabit.com/challenge/a8pSKKAr4JQBg9WcF

/*
Learn Lodash: _.pull, Pull Items From an Array

According to the lodash documentation, _.pull Removes all given values from array using SameValueZero for equality comparisons. Note that unlike _.without, this method mutates array.

Arguments
array (Array): The array to modify.
values: The values to remove.
Example

You work in a car dealership. A government inspector is coming to visit and wants to ensure you are only selling electric cars. Your boss asks you to pull all the cars that aren't electric off the lot.

pull("electric", "gas", "electric", "gas", "gas", "electric", "gas")
➞ ["electric", "electric", "electric"]

The challenege of this function is that it mutates the array so methods like filter and map can't be used.

Notes
Do not attempt to import lodash; you are simply writing your own version.
This entire series of challenges can be found here.
*/
