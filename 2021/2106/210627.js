// Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example:
// Input: columnTitle = "AB"
// Output: 28

// 주어진 문자열을 통해 column number를 반환하는 문제

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;

  for (const char of columnTitle) {
    result += char.charCodeAt(0) - 64;
  }

  return result;
};
// 아무 생각없이 풀었는데 이렇게 풀면 "AB"는 3이란 답이 나옴("C"가 3임)

var titleToNumber = function (s) {
  const charCodeBase = 64;
  const n = s.length;
  let result = 0;

  for (let i = 0; i < n; i++)
    result += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n - i - 1);

  return result;
};
// 자릿수마다 26^n이 붙게 됨, 즉 26^1 * 10의 자리수 + 26^0 * 1의 자리수
