// Reverse Bits

// Reverse bits of a given 32 bits unsigned integer.
// Note:
// Note that in some languages, such as Java, there is no unsigned integer type.
// In this case, both input and output will be given as a signed integer type.
// They should not affect your implementation, as the integer's internal binary representation is the same,
// whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation.
// Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

// Example:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596,
// so return 964176192 which its binary representation is 00111001011110000010100101000000.

// 주어진 수의 2진수를 뒤집었을때의 10진수를 반환하는 문제

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // 2진수화
  const bin = n.toString(2);
  // 32bit 자릿수 생성
  let resultBin = new Array(32).fill("0");
  // 역순으로 순회
  for (let i = bin.length - 1; i >= 0; i--) {
    resultBin[Math.abs(i - bin.length + 1)] = bin[i];
  }
  //10진수 반환
  return parseInt(resultBin.join(""), 2);
};
