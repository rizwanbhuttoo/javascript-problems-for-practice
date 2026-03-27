// https://edabit.com/challenge/z3rMa8L6MCTdYNT6d

/*
Let the Dominoes Fall Down

The function is given a string consisting of a mix of three characters representing which direction a domino is tilted:

"R" tilted to the right
"L" tilted to the left
"I" standing up, not tilted

The string represents the initial state of the assembly. After a time click the overall state can change. The tilted dominoes tend to tilt their standing-up neighbors. The propagation speed is the same for left and right. The following rules are applied:

"RI" will change to "RR" unless "I" is being pushed from two opposite direction at the same time.
"IL" will change to "LL" unless "I" is being pushed from two opposite direction at the same time.
"RIL" will stay unchanged because "I" is being pushed from two opposite direction at the same time.
"RIIL" will change to "RRLL" after one click.
"RR", "LL" "RL" will stay unchanged.
Some "I"s at the ends of the string may stay unaffected if no push came to them.

Determine the final state of the assembly after all propagations have been exhausted and return it as a string (of the same length).

Examples
dominoesFall("") ➞ ""
// No dominoes in the assembly.

dominoesFall("RIIII") ➞ "RRRRR"
// Propagation starts on the left causing all others to tilt right.

dominoesFall("IIIIL") ➞ "LLLLL"
// Propagation starts on the right causing all others to tilt left.

dominoesFall("RIIIL") ➞ "RRILL"
// After one click second and fourth tilt and then the middle one is pushed by two opposing forces.

dominoesFall("IRIIL") ➞ "IRRLL"
// The first one has not received any push.

dominoesFall("IRRIL") ➞ "IRRIL"
// The assembly is already in the final stage. No propagation was launched.
Notes

Keep in mind that the state changes time click after time click.
*/
