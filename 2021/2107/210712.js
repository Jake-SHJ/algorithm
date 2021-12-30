// XOR Operation in an Array

// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

// Example:
// Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.

// start부터 주어진 규칙대로 이루어진 배열에 대하여 XOR 연산한 결과를 반환하는 문제

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let nums = [start];

  for (let i = 1; i < n; i++) {
    nums.push(start + 2 * i);
  }

  return nums.reduce((acc, cur) => acc ^ cur);
};
// 문제의 의도대로 먼저 배열을 만들고, reduce를 통해 XOR 연산을 진행한 해답

var xorOperation = function (n, start) {
  let xor = start;

  for (let i = 1; i < n; i++) {
    xor ^= start + 2 * i;
  }

  return xor;
};
// 위 해답에서 순회 2회를 1회로 줄인 해답(discuss 참고, 내가 푼 방식에 적용)
