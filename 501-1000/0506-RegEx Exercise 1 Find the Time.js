// https://edabit.com/challenge/QkuiL7XApt2RMQqTJ

/*
RegEx Exercise 1: Find the Time

The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

Notes

The solution is in the Resources tab.
*/


function findTime(str) {
  const regex = /\b\d{2}:\d{2}\b/;
  const match = str.match(regex);
  return match ? match[0] : null;
}

console.log(findTime("Breakfast at 09:00 in the room 123:456")); // "09:00"