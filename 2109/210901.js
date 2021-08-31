// Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence
// while still preserving whitespace and initial word order.

// Example:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// 주어진 문자열을 단어별로 순서를 뒤집어서 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};
