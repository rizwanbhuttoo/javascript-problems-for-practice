// https://edabit.com/challenge/5uWRWmCwPcBg2ff2v

/*
Thisify ⁠— Convert Arguments to Properties

Consider a constructor function, foo:

const foo = function(x, y, z)
{
  this.x = x
  this.y = y
  this.z = z
}

foo takes three parameters, x, y, z. Upon an instance of foo being created, the instance receives the properties x, y, z.

const bar = new foo(1, 2, 3)
// bar.x = 1
// bar.y = 2
// bar.z = 3

The goal of this challenge is to accomplish an equivalent result without assigning the properties explicitly. Instead, create a function thisify to do it automatically and dynamically.

Here is what foo should look like:

const foo = function(x, y, z)
{
  thisify(this, Object.values(arguments))
}
// same as before!

const bar = new foo(1, 2, 3)
// bar.x = 1
// bar.y = 2
// bar.z = 3

thisify will take two arguments:

/**
 * @param {Object} instance - instance of the class
 * @param {Array} passed - arguments (values) passed to parameters of constructor
 *
 * @returns {void(0)}
 */

function thisify(instance, passed)
{
  // your code here
}

When run, thisify is expected to assign properties with the same name and value as the argument. For example, if the x argument is given a value of 2, the object should have a property "x" with a value of 2.

Examples
const rectangle = function(l, w, color)
{
  thisify(this, Object.values(arguments))
}

console.log(new rectangle(5, 10, "Red")) ➞
{
  l: 5,
  w: 10,
  color: "Red"
}

console.log(new rectangle(3, 4)) ➞
{
  l: 3,
  w: 4,
  color: undefined
}
Notes
If any arguments are left undefined, assign them undefined.
Use the Resources section if you need help.
*/
