// Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// 주어진 숫자만큼의 요소를 가진, 요소가 서로 중복되지 않고 합이 0인 배열을 반환하는 문제

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let sum = 0,
    result = [];

  for (let i = 1; i < n; i++) {
    result.push(i);
    sum += i;
  }

  result.push(-sum);

  return result;
};
// n-1 만큼 1부터 순차적으로 넣고, 순차적으로 넣은 값의 합의 -값을 넣어서 중복을 방지 + 합을 0으로 만듬
