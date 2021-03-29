// Minimum Add to Make Parentheses Valid

// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.
// Formally, a parentheses string is valid if and only if:
// - It is the empty string, or
// - It can be written as AB (A concatenated with B), where A and B are valid strings, or
// - It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

// Example:
// Input: "())"
// Output: 1

// 짝이 안맞는 괄호의 갯수를 구하는 문제
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let result = 0;
  if (S.length === 0) return 0;

  for (let i = 0; i < S.length; i++) {
    if (i !== 0 && i % 2 === 1) {
      S[i] !== ")" ? (result += 1) : null;
      S[i - 1] !== "(" ? (result += 1) : null;
    } else if (i % 2 === 0) {
      S[i] !== "(" ? (result += 1) : null;
      S[i + 1] !== ")" ? (result += 1) : null;
    }
  }

  return result;
};
// 처음에는 중첩괄호는 생각도 안하고 ( 뒤엔 ), ) 앞엔 ( 가 있어야 한다고만 생각했다. 당연히 틀렸고, 가면 갈수록 조건이 복잡해진다

var minAddToMakeValid = function (S) {
  let result = 0;
  if (S.length === 0) return 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      S[i + 1] !== ")" ? (result += 1) : null;
    } else {
      S[i - 1] !== "(" ? (result += 1) : null;
    }
  }

  return result;
};
// 심플해졌지만 중첩 괄호에서 멘붕을 맞이하였음

var minAddToMakeValid = function (S) {
  let result = 0,
    balance = 0;
  if (S.length === 0) return 0;

  for (let i = 0; i < S.length; i++) {
    balance += S[i] === "(" ? 1 : -1;
    if (balance === -1) {
      result++;
      balance++;
    }
  }

  return result + balance;
};
// 결국 솔루션을 참고
// ( 일 땐 balance에 일단 쌓아둔다. ) 일땐 balance에 (가 쌓여있었으면 차감될거고 쌓인게 없으면 -1이 될것이다.
// balance가 -1이 되면 일단 무조건 카운트되어야 하므로 result에 +1하고, balance는 0으로 되돌리기 위해 +1 시킨다.
// 최종적으로 result와 쌓여있는 balance의 합이 짝이 맞지 않는 괄호의 갯수이다.
