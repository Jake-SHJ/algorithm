// Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// 주어진 문자열을 규칙에 따라 문자 순서를 뒤집어서 반환하는 문제

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let result = "";
  // 2K번째에서 K번째까지의 문자열을 뒤집는 것이 조건
  for (let i = 0; i < s.length; i = i + 2 * k) {
    let arr = s.substring(i, i + k).split("");

    if (arr.length <= k) {
      const reverseStr = arr.reverse().join("");
      result += reverseStr;
    } else {
      const joinStr = arr.join("");
      result += joinStr;
    }

    result += s.substring(i + k, i + 2 * k);
  }

  return result;
};
