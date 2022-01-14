// Check If String Is a Prefix of Array

// Given a string s and an array of strings words, determine whether s is a prefix string of words.
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
// Return true if s is a prefix string of words, or false otherwise.

// Example:
// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.

// 주어진 문자열이 배열의 처음부터 순서대로 조합해서 나올 수 있는지에 대한 여부를 반환하는 문제

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  for (let i = words.length; i >= 0; i--) {
    // 처음부터 순서대로 조합해서 나올 수 있는가? > 뒤에서부터 잘라내었을 때 해당 단어가 나올 수 있는가
    const str = words.slice(0, i).join("");
    // 같은 문자열이 나온다면 true
    if (s === str) return true;
    // 단어 처음까지 안나오면 false
    if (i === 0) return false;
  }
};

// 앞에서부터 확인하면 문자열에 순서대로 존재하는지 확인하는데 필요한 절차가 추가되어 비효율적
