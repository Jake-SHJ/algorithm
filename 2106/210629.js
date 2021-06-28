// Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// 주어진 배열의 절반을 갈라 교차하여 만들어진 배열을 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let result = [];
  let tmp = n;

  for (let i = 0; i < nums.length; i++) {
    if (i < n) {
      result[i * 2] = nums[i];
    } else {
      tmp -= 1;
      result[i - tmp] = nums[i];
    }
  }

  return result;
};
// 규칙을 찾는 것에만 급급한 나머지 로직이 길어짐
// 두 가지를 한번에 하는 방법이 discuss에 심플하게 나와있었음

var shuffle = function (nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }

  return result;
};
// 해당 답안
