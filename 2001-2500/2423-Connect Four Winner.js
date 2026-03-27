// https://edabit.com/challenge/CE7PoZ9FACoXDtikG

/*
Connect Four Winner

Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid.

The game has two players: yellow and red while columns are named from "A" to "G". The first player who connects four items of the same color is the winner.

Create a function that takes an array of player positions showing the order of the pieces which are dropped in columns. Function should return "Yellow", "Red" or "Draw" accordingly.

Examples
connectFourWinner([
  "A_Red",
  "B_Yellow",
  "A_Red",
  "B_Yellow",
  "A_Red",
  "B_Yellow",
  "G_Red",
  "B_Yellow"
]) ➞ "Yellow"

// Yellow has 4 conescutive discs in column B
connectFourWinner([
  "A_Red",
  "B_Yellow",
  "A_Red",
  "E_Yellow",
  "F_Red",
  "G_Yellow",
  "A_Red",
  "G_Yellow"
]) ➞ "Draw"
Notes

N/A
*/
