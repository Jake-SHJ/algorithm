// Count Largest Group

// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits.
// Return how many groups have the largest size.

// Example:
// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.

/**
 * @param {number} n
 * @return {number}
 */
// 내 머리에서 나온 것
var countLargestGroup = function (n) {
  let groupObject = {};
  for (let i = 0; i < n; i++) {
    const number = i + 1;
    let copiedNumber = number;
    let sum = 0;
    while (copiedNumber > 0) {
      sum += copiedNumber % 10;
      copiedNumber = parseInt(copiedNumber / 10);
    }
    groupObject[sum]
      ? (groupObject[sum] = groupObject[sum] + 1)
      : (groupObject[sum] = 1);
  }
  let maxCount = 0;
  const values = Object.values(groupObject);
  values.map((value) => {
    if (value === Math.max(...values)) {
      maxCount++;
    }
  });
  return maxCount;
};

// 연산 속도, 메모리 상위 티어
var countLargestGroup = function (n) {
  let m = new Map(),
    max = 0;
  for (let i = 1; i <= n; i++) {
    let sum = getSum(i);
    m.set(sum, m.get(sum) + 1 || 1); // 갯수를 바로 넣었으면 최대 사이즈의 갯수를 바로 뽑을 수 있었다.
    max = Math.max(max, m.get(sum));
  }
  return Array.from(m.values()).filter((num) => num === max).length;
};

var getSum = function (n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};
