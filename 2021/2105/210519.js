// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true

// 주어진 문자열 2개가 anagram이 맞는지 반환하는 문제

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    const target = t.indexOf(s[i]);

    // target이 없으면 false
    if (target === -1) {
      return false;
    }

    t = t.replace(s[i], ""); // 있으면 지운다
  }

  return !t.length; // length가 0이면 true
};
