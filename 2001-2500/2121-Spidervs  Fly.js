// https://edabit.com/challenge/eABgYgk9buGL3rvrx

/*
Spider🕷️vs. 🦟 Fly

A spider web is defined by rings numbered from 0-4 from the center and radials labeled clock-wise from the top as A-H.

Create a function that takes the coordinates of spider and fly and returns the shortest path for the spider to get to the fly.

It's worth noting that the shortest path should be calculated "geometrically", not by counting the number of points that path goes through. We could arrange that:

Angle between every pair of radials is the same (45 degrees).
Distance between every pair of rings is always the same (let's say "x").

In the above picture, spider coordinates are "H3" and fly coordinates are "E2". The spider will follow the shortest path "H3-H2-H1-A0-E1-E2" to reach the fly.

Examples
spiderVsFly("H3", "E2") ➞ "H3-H2-H1-A0-E1-E2"

spiderVsFly("A4", "B2") ➞ "A4-A3-A2-B2"

spiderVsFly("A4", "C2") ➞ "A4-A3-A2-B2-C2"
Notes

The center of the web will always be A0.
*/
