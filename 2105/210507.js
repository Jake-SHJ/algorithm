// Minimum Remove to Make Valid Parentheses

// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Example:
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// 주어진 문자열에서 올바른 괄호쌍이 아닌 괄호를 제거한 문자열을 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let target = [];
  let count = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(i, s[i]);
    if (s[i] === "(") {
      count += 1;
      target.push(i);
    } else if (s[i] === ")") {
      if (count === 0) {
        target.push(i);
      } else {
        count -= 1;
        target.pop();
      }
    }
  }

  for (let j = 0; j < target.length; j++) {
    map.delete(target[j]);
  }

  return Array.from(map.values()).join("");
};

// map에 인덱스와 문자열을 키, 값으로 넣고, target에 지워야 될 인덱스를 저장한 다음
// target을 순회하여 map에서 해당 인덱스를 제거하고 문자열을 반환하도록 하였음

// 메모리 측면이나 속도 측면에서 느린 편으로 나왔는데, 아무래도 순회가 많이 나와서 그런듯
