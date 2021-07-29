// Remove Outermost Parentheses

// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example:
// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// 주어진 문자열에서 최외각 괄호를 제거한 문자열을 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let tmp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (tmp === 0) {
        tmp += 1;
        continue;
      } else {
        tmp += 1;
        result += s[i];
      }
    } else {
      if (tmp === 1) {
        tmp -= 1;
        continue;
      } else {
        tmp -= 1;
        result += s[i];
      }
    }
  }

  return result;
};

// 카운터를 두고 카운터가 0일때 여는 괄호가 오면 최외각 괄호이므로 카운터에 1을 더하고 넘어감
// 내부에 괄호가 더 있다면 여는 괄호에 의해 카운터는 계속오르고 카운터가 0이나 1이 아니기 때문에 문자열에 저장됨
// 카운터가 1이 되고, 닫는 괄호가 나오면 최외각의 닫는 괄호이므로 카운터에서 1을 빼고 넘어감
