// https://edabit.com/challenge/9kB7LsxejgoAeFrSB

/*
Promises VII: Chaining

then() functions return a new promise, different from the original. Since catch functions are actually then() functions behind the scenes, they also return new promises. So if that's true then you could do something like this:

new Promise((resolve, reject) => {
    console.log("Initial");
    resolve();
})
.then(() => {
    throw new Error("Something failed");
    console.log("Do this");
})
.catch(() => {
    console.error("Do that");
})
.then(() => {
    console.log("Do this, no matter what happened before");
});

// logs
Initial
Do that
Do this, no matter what happened before

The text "Do this" is not displayed because the "Something failed" error caused a rejection.

The last then() call in the function doSomething() should log in my main call something but logs undefined instead. Find out what's wrong with the code and fix it. You will see two logs in my function something, this is not an error. This is from the test. Do not remove any then() or catch() functions

Notes
Do not overthink this!
Check the Resources tab if you get stuck.
*/
