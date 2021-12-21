// Number of 1 Bits

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
// Note: Note that in some languages, such as Java, there is no unsigned integer type.
// In this case, the input will be given as a signed integer type.
// It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation.
// Therefore, in Example 3, the input represents the signed integer. -3.

// Example:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// 주어진 이진수에서 1의 개수를 반환하는 문제

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // n이 10진수로 변환되어 내려옴, 2진수로 변환
  const biNum = n.toString(2);
  let result = 0;
  // 개수 카운트
  for (const bit of biNum) {
    if (bit === "1") result++;
  }
  return result;
};
