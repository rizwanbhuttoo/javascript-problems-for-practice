// https://edabit.com/challenge/nntT8D5xdawH464Fo

/*
Evaluate the Group of Parentheses

The function is given a balanced parentheses string. Each open "(" has corresponding closed ")". Compute the total score based on the following rules:

Substring s = "()" has score 1,
Substring "s1s2" has total score as score of "s1" + score of "s2",
Substring "(s)" has total score as 2 * score of "s".

Calculate the total score of the given expression and return it as integer.

Examples
evalParentheses("()") ➞ 1
// 1

evalParentheses("(())") ➞ 2
// 2 * 1

evalParentheses("()()") ➞ 2
// 1 + 1

evalParentheses("((())())") ➞ 6
// 2 * (2 * 1 + 1)

evalParentheses("(()(()))") ➞ 6
// 2 * (1 + 2 * 1)

evalParentheses("()(())") ➞ 3
// 1 + 2 * 1

evalParentheses("()((()))") ➞ 5
// 1 + 2 * 2 * 1
Notes

N/A
*/
