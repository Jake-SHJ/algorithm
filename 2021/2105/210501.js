// Score of Parentheses

// Given a balanced parentheses string S, compute the score of the string based on the following rule:
//  - () has score 1
//  - AB has score A + B, where A and B are balanced parentheses strings.
//  - (A) has score 2 * A, where A is a balanced parentheses string.

// Example:
// Input: "(()(()))"
// Output: 6

// 주어진 중첩된 괄호를 규칙에 따라 연산하여 score를 반환하는 문제

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  let score = 0,
    depth = 0,
    i = 0;

  while (i < S.length) {
    if (S[i] === "(") {
      depth++;
      i++;
    } else {
      score += 2 ** (depth - 1);
      while (S[i] === ")") {
        i++;
        depth--;
      }
    }
  }

  return score;
};

// 중첩된 괄호의 연산에 대한 아이디어가 전혀 떠오르지 않아서 discuss를 참조했음
// 중첩된 괄호의 시작은 곧 2 ** n 연산이고(괄호가 중첩 될 때마다 * 2 연산이기 때문에) 괄호와 괄호 간의 연산은 곧 + 연산임
// 따라서 depth를 통해 2 ** n 연산을, 괄호가 닫히는 순간 score에 덧셈 연산을 하여 올바른 답을 도출해 낼 수 있음
// 꾸준히 풀어도 아직 많이 부족하다..
