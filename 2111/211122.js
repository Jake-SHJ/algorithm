// Complement of Base 10 Integer

// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer n, return its complement.

// Example:
// Input: n = 5
// Output: 2
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

// 주어진 10진수를 2진수 변환하여 그 값을 반전시킨 다음, 다시 10진수로 변환하였을 때의 값을 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  const toStr = n.toString(2);
  let comp = "";

  for (const num of toStr) {
    if (num === "0") {
      comp += "1";
    } else {
      comp += "0";
    }
  }

  return parseInt(comp, 2);
};
