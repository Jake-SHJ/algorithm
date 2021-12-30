// Defuse the Bomb

// You have a bomb to defuse, and your time is running out!
// Your informer will provide you with a circular array code of length of n and a key k.
// To decrypt the code, you must replace every number.
// All the numbers are replaced simultaneously.
//  - If k > 0, replace the ith number with the sum of the next k numbers.
//  - If k < 0, replace the ith number with the sum of the previous k numbers.
//  - If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0],
// and the previous element of code[0] is code[n-1].
// Given the circular array code and an integer key k,
// return the decrypted code to defuse the bomb!

// Example:
// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers.
// The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

// 주어진 배열을 규칙에 따라 복호화하여 반환하는 문제

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let result = [];
  const circular = [...code, ...code];

  for (let i = 0; i < code.length; i++) {
    // 0이면 조기 반환
    if (k === 0) {
      return new Array(code.length).fill(0);
    }

    // 0보다 크면 circular 처음부터 조회
    if (k > 0) {
      let temp = 0;
      for (let j = 0; j < k; j++) {
        temp += circular[i + j + 1];
      }
      result.push(temp);
    }

    // 0보다 작으면 circular 중간부터 조회
    if (k < 0) {
      let temp = 0;
      for (let j = 0; j > k; j--) {
        temp += circular[code.length + i + j - 1];
      }
      result.push(temp);
    }
  }

  return result;
};
