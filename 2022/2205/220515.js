// Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// 주어진 n개의 괄호로 만드는 모든 경우를 반환하는 문제

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  const go = (l, r, s) => {
    if (l > r) return;

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + "(");
    if (r > 0) go(l, r - 1, s + ")");
  };

  go(n, n, "");

  return res;
};
// discuss 참조, backtracking을 이용한 방법
// dfs와 backtracking은 방식이 비슷해보이지만
// dfs는 모든 경우의 수를 탐색하는 것이고, backtracking은 유망한 경우의 수를 탐색하는 것이라
// 제한적인 상황에서는 backtracking으로 해결
