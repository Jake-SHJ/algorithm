// Count Square Sum Triples

// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.
// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

// Example:
// Input: n = 5
// Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).

// 주어진 숫자 이하로 만들어질 수 있는 square triple의 갯수를 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let set = new Set();
  let i = 1;
  let count = 0;
  while (i <= n) {
    set.add(i * i);
    i++;
  }
  for (let k = 1; k <= n; k++) {
    for (let j = 1; j <= n; j++) {
      if (set.has(Math.pow(k, 2) + Math.pow(j, 2))) {
        count++;
      }
    }
  }
  return count;
};
// discuss 참고, 너무 어렵게 생각해서 길을 잃음
// n이 가질 수 있는 모든 제곱을 set에 넣어두고, 만들 수 있는 모든 제곱을 순회하여 답을 찾는 방식
