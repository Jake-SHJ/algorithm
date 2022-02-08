// Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example:
// Input: a = "11", b = "1"
// Output: "100"

// 주어진 이진수를 더하여 반환하는 문제

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const sum = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
  return sum.toString(2);
};
// 단순하게 풀려고 했는데 역시나..

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "",
    carry = 0;

  while (a || b || carry) {
    let sum = Number(a.slice(-1)) + Number(b.slice(-1)) + carry;

    if (sum > 1) {
      result = (sum % 2) + result;
      carry = 1;
    } else {
      result = sum + result;
      carry = 0;
    }

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return result;
};
// 문자열 그대로 더해나가는게 정답
