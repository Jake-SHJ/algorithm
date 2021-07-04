//  Subtract the Product and Sum of Digits of an Integer

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example:
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// 주어진 숫자의 각자릿수를 곱한 값과 더한 값의 차를 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const nArr = n
    .toString()
    .split("")
    .map((a) => a * 1);
  return (
    nArr.reduce((acc, cur) => acc * cur) - nArr.reduce((acc, cur) => acc + cur)
  );
};

// 순회가 좀 많아지면서 메모리나 속도나 하위를 맴돔

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const nArr = Array.from(String(n), Number);
  return (
    nArr.reduce((acc, cur) => acc * cur) - nArr.reduce((acc, cur) => acc + cur)
  );
};

// 숫자의 배열화를 좀 더 간소화, 메모리적 측면에서는 크게 상향, 속도는 미약하게 상향

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const nArr = Array.from(String(n), Number);
  const product = nArr.reduce((acc, cur) => acc * cur);
  const sum = nArr.reduce((acc, cur) => acc + cur);
  return product - sum;
};

// 리턴 요소들을 변수화
// 메모리적 측면은 다시 하향, 속도적 측면으로는 크게 상향
