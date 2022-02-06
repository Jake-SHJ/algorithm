// Replace All ?'s to Avoid Consecutive Repeating Characters

// Given a string s containing only lowercase English letters and the '?' character,
// convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters.
// You cannot modify the non '?' characters.
// It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.
// Return the final string after all the conversions (possibly zero) have been made.
// If there is more than one solution, return any of them.
// It can be shown that an answer is always possible with the given constraints.

// Example:
// Input: s = "?zs"
// Output: "azs"
// Explanation: There are 25 solutions for this problem.
// From "azs" to "yzs", all are valid. Only "z" is an invalid modification
// as the string will consist of consecutive repeating characters in "zzs".

// 주어진 문자열에서 ?를 다른 문자로 치환할 때, 앞뒤의 문자와 다른 문자로 치환할 경우의 문자열을 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
// 가능한 문자열을 반환
const getAvailableChars = (idx, pre, next, length) => {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (idx !== 0) {
    chars = chars.replace(pre, "");
  }
  if (idx !== length - 1) {
    chars = chars.replace(next, "");
  }
  return chars;
};

var modifyString = function (s) {
  // 치환하기 쉽게 배열로 전환
  let sArr = s.split("");
  // ? 치환
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "?") {
      const chars = getAvailableChars(i, sArr[i - 1], sArr[i + 1], sArr.length);
      sArr.splice(i, 1, chars[0]);
    }
  }
  return sArr.join("");
};
