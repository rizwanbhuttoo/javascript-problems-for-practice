// https://edabit.com/challenge/knW3A8W6vpxfJa9iK

/*
Sort Beethoven's Nicknamed Works by Genre, Nickname, and Opus Number

Write a function that takes an array of nicknamed works by Beethoven (objects with op, nickname, and genre properties, all non-empty strings) and returns an object whose keys are the pluralized genres and whose values are arrays of the corresponding work-objects, with each array sorted alphabetically by nickname (and secondarily by op in the case of a shared nickname—more on this below).

To pluralize a genre, just add an "s", with the exception of "symphony" (pl. "symphonies").

Each nickname has headline-style capitalization (the first letter of each word is uppercase).

Opus-number strings (op) always begin with an integer, but some opuses contain more than one work. In that case, a work's op string will end either with a lowercase letter (e.g., "81a") or with a slash followed by another integer (e.g., "27/1"). (For a given opus that contains more than one work, either the lettering scheme or the numbering scheme is used—never both.)

A single nickname may apply to an entire opus that contains multiple works of the same genre. Such works should be sub-sorted by their full op strings (so "1a" would precede "1b", and "1/1" would precede "1/2").

Try to keep your code abstract! With the exception of the "symphony" genre, you don't have to know any of the values of the input-data to complete this challenge.
*/
