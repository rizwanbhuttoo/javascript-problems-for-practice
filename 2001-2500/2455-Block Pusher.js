// https://edabit.com/challenge/sQ6KnsgJjiniZ32yd

/*
Block Pusher

Create a function which returns the state of a board after n moves. There are different types of blocks on the board, which are represented as strings.

> is a pusher which moves right every turn, and pushes a block to the right if it occupies the same space as it.
'#' is a block which can be pushed by the pusher. If a block is pushed onto another block, then the other block also joins the push chain!
'-' is an empty space, which a block can be pushed into.

Note that the pusher can push any number of blocks at a time, but is always stopped if the push chain hits the end of the list.

Examples
blockPushing(['-', '>', '#', '-', '#', '-', '-', '-'], 1) ➞ ['-', '-', '>', '#', '#', '-', '-', '-']

blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10) ➞ ['-', '-', '-', '>', '#', '#', '#']

blockPushing(['>', '-', '>', '#', '-', '-', '#', '-'], 2) ➞ ['-', '-', '>', '-', '>', '#', '#', '-']

blockPushing(['>', '>', '>', '-'], 3) ➞ ['-', '>', '>', '>']
Notes
There may be more than one pusher at a time on the board.
Pushers are solid blocks, so a push chain of pushers should also stop when hitting the end of the list.
*/
