// https://edabit.com/challenge/tWm9EtfbJEJPHcCug

/*
What Gives a Bad Mood?

The factors said to have the greatest impact on someone's mood are: weather, meals, and sleep. Your task is, given an array of sub-arrays of different values for: Mood, Weather, Meals, and Sleep, determine which other variable has had the greatest impact on the mood.

Examples
greatestImpact([
  [1, 1, 3, 10],
  [1, 1, 3, 10],
  [1, 1, 3, 10]
]) ➞ "Weather"

// As it was always low but all others were high.

greatestImpact([
  [10, 10, 3, 10],
  [10, 10, 3, 10],
  [10, 10, 3, 10]
]) ➞ "Nothing"

// As all were always high.
Notes

The mood will always go from 1 to 10, the weather will always go from 1 to 10, the meals will always go from 1 to 3, and the sleep will always go from 1 to 10. In cases of mood and weather, 1 is negative and 10 is positive. All sub-arrays values will be in the order [Mood, Weather, Meals, Sleep].
*/
