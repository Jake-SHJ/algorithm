// Number Complement

// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

// Example:
// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// 주어진 숫자를 이진법으로 0과 1을 뒤집었을때의 숫자를 반환하는 문제

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((el) => (el === "1" ? "0" : "1"))
      .join(""),
    2
  );
};
