// Minimum Moves to Convert String

// You are given a string s consisting of n characters which are either 'X' or 'O'.
// A move is defined as selecting three consecutive characters of s and converting them to 'O'.
// Note that if a move is applied to the character 'O', it will stay the same.
// Return the minimum number of moves required so that all the characters of s are converted to 'O'.

// Example:
// Input: s = "XXOX"
// Output: 2
// Explanation: XXOX -> OOOX -> OOOO
// We select the first 3 characters in the first move, and convert them to 'O'.
// Then we select the last 3 characters and convert them so that the final string contains all 'O's.

// 주어진 문자열에서 한번에 3개씩 X를 O로 바꿀 수 있을 때, 전부 O로 바꾸는 최소한의 수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "X") {
      result += 1;
      i += 2;
      continue;
    }
  }

  return result;
};
