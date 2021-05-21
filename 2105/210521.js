// Base 7

// Given an integer num, return a string of its base 7 representation.

// Example:
// Input: num = 100
// Output: "202"

// 주어진 수를 7진수의 문자열로 반환하는 문제

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  return num.toString(7);
};

// 어렵게 고민하다가 검색하니 한줄로 나오던 문제
// toString에 base를 변형하여 반환하는 기능이 있는줄은 처음 알았음...
