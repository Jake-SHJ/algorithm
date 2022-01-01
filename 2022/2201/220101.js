// Make The String Great

// Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
//  - 0 <= i <= s.length - 2
//  - s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them.
// You can keep doing this until the string becomes good.
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.

// Example:
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

// 주어진 문자열에서 연속하는 문자가 같은 문자면서 대소문자가 다를 때, 그 문자쌍을 제거하여 마지막에 나오는 문자열을 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let result = "";
  if (s.length === 1) return s;
  const helper = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
      // 첫문자 case 체크
      const isLowerCase = str[i] === str[i].toLowerCase();
      if (isLowerCase) {
        // 다른 문자인지 체크
        const isDiffChar = str[i] !== str[i + 1].toLowerCase();
        if (isDiffChar) {
          result = str;
          continue;
        }
      } else {
        const isDiffChar = str[i] !== str[i + 1].toUpperCase();
        if (isDiffChar) {
          result = str;
          continue;
        }
      }
      // 같은 case인지 체크
      const isSameCase = str[i] === str[i + 1];
      if (isSameCase) {
        result = str;
        continue;
      }
      // 체크 항목 다 통과했으면 해당 문자쌍 제거
      result = str.replace(str[i] + str[i + 1], "");
      // 제거 후 붙은 문자열이 다시 조건에 부합하는 문자쌍일수 있으므로 재귀
      return helper(result);
    }
  };
  helper(s);
  return result;
};
