// https://edabit.com/challenge/6YfWWLSQyPJwz2Srg

/*
Image Manipulation: Invert (Part 1)

Images can be described as a 3D array.

// This image has only one white pixel:

[
  [[255, 255, 255]]
]
// This one is a 2 by 2 black image:

[
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]

Your task is to create a function that takes a 3D array representation of an image and returns the inverse of that.

For example, white becomes black, black becomes white, etc.

Examples
invert([
  [[255, 255, 255], [255, 255, 255]],
  [[255, 255, 255], [255, 255, 255]]
]) ➞ [
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]
Notes
A valid RGB value ranges from 0 to 255 (inclusive).
If the given array contains out of bound values, convert them to the nearest valid one.
Next challenge in this series: Image Manipulation: 255 Shades of Grey (Part 2)
*/
