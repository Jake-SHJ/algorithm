// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example:
// Input: s = "()"
// Output: true

// 주어진 문자열이 올바른 괄호쌍인지 확인하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let result = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      continue;
    }

    if (s[i] === ")" && stack[stack.length - 1] !== "(") {
      return (result = false);
    } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
      continue;
    }

    if (s[i] === "}" && stack[stack.length - 1] !== "{") {
      return (result = false);
    } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
      continue;
    }

    if (s[i] === "]" && stack[stack.length - 1] !== "[") {
      return (result = false);
    } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
      continue;
    }
  }

  if (stack.length !== 0) result = false;

  return result;
};

// 괄호의 경우의 수가 3개라서 풀수있는 방식
// 만약 괄호가 더 많은 경우라면 이렇게 풀어선 안될 것이다..
// 시작괄호를 stack에 쌓아두고, 닫는 괄호와 비교하여 맞는 쌍인지 확인하면서 순회하는 방식
// 미디엄 풀다가 슬슬 벽에 부딪히는 것 같아서 이지로 내려왔는데 이지도 쉽진 않다..
