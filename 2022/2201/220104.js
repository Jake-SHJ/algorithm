// Delete Characters to Make Fancy String

// A fancy string is a string where no three consecutive characters are equal.
// Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion. It can be shown that the answer will always be unique.

// Example:
// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".

// 주어진 문자열에서 같은 문자가 연속으로 3번 나오지 않도록 문자를 제거하여 나오는 문자열을 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  const sArr = s.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === sArr[i + 1] && sArr[i] === sArr[i + 2]) {
      sArr[i] = "";
    }
  }

  return sArr.join("");
};
// 재귀 돌리고, splice로 제거하고 별짓 다했는데 계속 시간 초과
// 재귀나 splice나 순회를 계속 도는거라 느릴 수 밖에..
// 그냥 빈 문자열 치환하고 join 하는게 가장 빠름..
