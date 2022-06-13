// Reverse Substrings Between Each Pair of Parentheses

// You are given a string s that consists of lower case English letters and brackets.
// Reverse the strings in each pair of matching parentheses, starting from the innermost one.
// Your result should not contain any brackets.

// Example:
// Input: s = "(abcd)"
// Output: "dcba"

// 주어진 문자열에서 괄호가 내 문자열을 뒤집었을때의 결과값을 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = [];
  for (const char of s) {
    // 내부에서부터 뒤집기 시작
    if (char !== ")") {
      stack.push(char);
      continue;
    }
    // 뒤집힐 타겟을 stack의 역순으로 추출
    let c = stack.pop();
    // queue에 넣고
    let queue = [];
    while (c !== "(") {
      queue.push(c);
      c = stack.pop();
    }
    // 역순으로 추출된 결과를 stack에 다시 주입
    while (queue.length) {
      stack.push(queue.shift());
    }
  }
  return stack.join("");
};
// discuss 참조
