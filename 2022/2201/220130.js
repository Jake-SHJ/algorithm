//  Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// 주어진 두 문자열에서 반복되는 가장 긴 문자열을 반환하는 문제

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  } else if (str1 == str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  } else {
    return gcdOfStrings(str2.slice(str1.length), str1);
  }
};
// discuss 참조
// 반복된것만 찾다가 로직이 꼬여버림, 가장 긴 반복 문자열이라 나누기가 쉽지 않았음
