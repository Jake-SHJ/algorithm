// Check if One String Swap Can Make Strings Equal

// You are given two strings s1 and s2 of equal length.
// A string swap is an operation where you choose two indices in a string (not necessarily different)
// and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.
// Otherwise, return false.

// Example:
// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".

// 주어진 두 문자열에서 서로 다른 2개의 문자의 위치를 바꿨을 때, 같은 문자열이 되는지 여부를 반환하는 문제

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let diff = [];
  // 서로 다른 문자를 저장
  for (let i = 0; i < s1.length; i++) {
    s1[i] !== s2[i] ? diff.push(i) : null;
    // 2개 이상 다른 경우 조기 반환
    if (diff.length !== 2) return false;
  }
  // 이미 같은 문자열
  if (diff.length === 0) return true;
  // 자리를 바꿔도 다른 문자열
  if (s1[diff[0]] !== s2[diff[1]] || s1[diff[1]] !== s2[diff[0]]) return false;
  return true;
};
