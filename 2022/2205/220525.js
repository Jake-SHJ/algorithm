// Circular Permutation in Binary Representation

// Given 2 integers n and start. Your task is return any permutation p of (0,1,2.....,2^n -1) such that :
//  - p[0] = start
//  - p[i] and p[i+1] differ by only one bit in their binary representation.
//  - p[0] and p[2^n -1] must also differ by only one bit in their binary representation.

// Example:
// Input: n = 2, start = 3
// Output: [3,2,0,1]
// Explanation: The binary representation of the permutation is (11,10,00,01). 
// All the adjacent element differ by one bit. Another valid permutation is [3,1,0,2]

// 주어진 start 부터 1비트씩 차이가 나는 순열을 가진 배열을 반환하는 문제

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  const grayCodes = [], end = 2 ** n - 1;

  let startIdx = -1;
  // 0부터 순차적으로 비트 시프트 된 순열을 생성
  for (let i = 0; i <= end; i++) {
    grayCodes[i] = i ^ (i >> 1);
    if (grayCodes[i] == start) startIdx = i;
  }

  const res = [];
  // start부터 순열을 재배열
  for (let i = 0; i <= end; i++) {
    res[i] = grayCodes[startIdx];
    startIdx++;
    if (startIdx === grayCodes.length) startIdx = 0;
  }

  return res;
};
// discuss 참조, 보통은 봐도 모르는 경우가 많은데 오늘건 이해가 잘됐음..
