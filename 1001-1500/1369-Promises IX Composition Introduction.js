// https://edabit.com/challenge/Z5EwpzWB37HpbvmsG

/*
Promises IX: Composition Introduction

The built-in javascript Promise object has several methods you can use to compose your asynchronous operations. The Promise.resolve() function takes either a value or a promise.

var original = Promise.resolve(33)
var cast = Promise.resolve(original)
cast.then(function(value) {
  console.log('value: ' + value)
})

So what is going on here?

original is assigned a promise that is passed the value 33.
cast is passed the promise original.
The then function is passed original and becomes the then function for original.
Then it takes original's value(33) and logs it to the console.

One other thing Promise.resolve() does is that it will cast anything that might be a promise(ie. thenables) to a native Javascript Promise. This is generally the use case for it.

Use a Promise method to turn the thenable object into a native promise and assign it to the promise variable. Assign the fulfilled value to the result variable.

Notes

Check out the Resources tab if you get stuck.
*/
