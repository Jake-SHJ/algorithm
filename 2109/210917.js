// Sort Array By Parity II

// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
// Return any answer array that satisfies this condition.

// Example:
// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// 주어진 배열을 각 인덱스의 홀짝과 요소의 홀짝을 맞춰서 정렬하여 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let odd = [],
    even = [],
    result = [];

  for (const num of nums) {
    num % 2 === 0 ? even.push(num) : odd.push(num);
  }

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }

  return result;
};
// 처음엔 갈라서 넣었는데 순회를 2번이나 돌아야됨

var sortArrayByParityII = function (nums) {
  let result = [];

  for (let i = 0, even = 0, odd = 1; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[even] = nums[i];
      even += 2;
    } else {
      result[odd] = nums[i];
      odd += 2;
    }
  }

  return result;
};
// 한번에 끝내는 방법
