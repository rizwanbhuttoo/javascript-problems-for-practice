// https://edabit.com/challenge/uJTFvuYDRD5cEsfdL

/*
Cartesian Matrix

In this challenge, create a matrix that simulates how a series of points are placed on a portion of the cartesian plane.

You are given two objects as parameters:

dim contains the dimension of the regular matrix to build:

The property h is the height, or the total number of rows.
The property w is the width, or the total number of columns.

cnt contains the coordinates of the cartesian plane center:

The property r is the row (0-indexed).
The property c is the column (0-indexed).

You have to implement a function that returns a matrix (sized accordingly to dim), with each "cell" being an array containing the [x, y] coordinates from the given central point (treating so the cells as points on the cartesian plane).

Examples
cartesianMatrix({h: 3, w: 4}, {r: 1, c: 1}) ➞ [
  [[-1, 1], [0, 1], [1, 1], [2, 1]],
  [[-1, 0], [0, 0], [1, 0], [2, 0]],
  [[-1, -1], [0, -1], [1, -1], [2, -1]]
]

cartesianMatrix({h: 4, w: 3}, {r: 0, c: 1}) ➞ [
  [[-1, 0], [0, 0], [1, 0]],
  [[-1, -1], [0, -1], [1, -1]],
  [[-1, -2], [0, -2], [1, -2]],
  [[-1, -3], [0, -3], [1, -3]]
]

cartesianMatrix({h: 2, w: 4}, {r: 0, c: 0}) ➞ [
  [[0, 0], [1, 0], [2, 0], [3, 0]],
  [[0, -1], [1, -1], [2, -1], [3, -1]]
]
Notes
The coordinates must be returned in the order [x-axis, y-axis].
The coordinates of the central point (or origin), are always [0, 0]. The origin will be always be included in the matrix.
Points placed to the right or up from the origin have positive values (i.e. [1, 2] means 1 cell to the right and 2 cells up from the origin).
Points placed to the left or down from the origin have negative values (i.e. [-2, -1] means 2 cells to the left and 1 cell down from the origin).
*/
