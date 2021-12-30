// Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// 주어진 n개의 계단을 1계단 혹은 2계단씩 오를 수 있을 때, 경우의 수를 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let tmp = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      tmp.push(1);
    } else if (i === 1) {
      tmp.push(2);
    } else {
      tmp.push(tmp[i - 2] + tmp[i - 1]);
    }
  }

  return tmp.pop();
};

// 규칙을 빠르게 파악할 수 있다면 금방 풀 수 있는 문제이나, 그렇게 빨리 캐치하진 못했음..
