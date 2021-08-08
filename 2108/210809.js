// Decrypt String from Alphabet to Integer Mapping

// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.
// It's guaranteed that a unique mapping will always exist.

// Example 1:
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

// 주어진 문자열을 규칙에 따라 알파벳 문자열로 변환하여 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      result += String.fromCharCode(Number(s[i] + s[i + 1]) + 96);
      i += 2;
    } else {
      result += String.fromCharCode(Number(s[i]) + 96);
    }
  }

  return result;
};

// 처음에는 객체에 각 값을 일일히 저장해 두고 찾도록 했으나
// fromCharCode로 변환하는게 더 깔끔하고 메모리가 절약됨
