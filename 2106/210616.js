// Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example:
// Input: nums = [1,2,3]
// Output: 6

// 주어진 배열에서 3개의 수의 곱이 가장 큰 경우를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let count = 0;
  let result = 1;

  while (count < 3) {
    const max = Math.max(...nums);
    const maxIdx = nums.indexOf(max);
    nums.splice(maxIdx, 1);
    count += 1;
    result *= max;
  }

  return result;
};

// 양수만 고려하여 틀린 답안 (음수 2개의 곱이 더 큰 경우가 있음)

var maximumProduct = function (nums) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity,
    min1 = Infinity,
    min2 = Infinity;

  for (let num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    // 음수를 고려하여 가장 작은 수 2개를 저장
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

// discuss의 답안
