// Minimum Flips to Make a OR b Equal to c

// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). 
// (bitwise OR operation).
// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

// Example:
// Input: a = 2, b = 6, c = 5
// Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)

// 주어진 a, b의 2진수의 bit OR 연산의 결과가 c가 되는 최소한의 bitflip 횟수를 반환하는 문제

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// 자릿수 맞추기
const addZero = (bin, len) => {
  while (bin.length !== len) {
    bin = '0' + bin;
  }
  return bin;
}

var minFlips = function(a, b, c) {
  // 2진수 변환
  let binA = a.toString(2), binB = b.toString(2), binC = c.toString(2);
  // 최대자릿수
  let maxLen = Math.max(binA.length, binB.length, binC.length);
  // 자릿수 맞추기
  const A = addZero(binA, maxLen), B = addZero(binB, maxLen), C = addZero(binC, maxLen);
  let res = 0;
  // flip 횟수 연산
  for (let i = 0; i < C.length; i++) {
    if (C[i] === '0') {
      if (A[i] === '1' && B[i] === '1') res += 2;
      if (A[i] === '1' && B[i] === '0') res += 1;
      if (A[i] === '0' && B[i] === '1') res += 1;
    } else {
      if (A[i] === '0' && B[i] === '0') res += 1;
    }
  }
  return res;
};
