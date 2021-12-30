// Sort Array By Parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// Example:
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// 주어진 배열을 짝수를 선정렬, 홀수를 후정렬하여 반환하는 문제(차순은 상관없이 모든 답이 인정)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const result = [];

  nums.forEach((num) => {
    num % 2 === 0 ? result.unshift(num) : result.push(num);
  });

  return result;
};

// result.splice(0, 0, num) 보다 unshift가 확실히 더 빨랐음
// evenArr, oddArr을 따로 만들고 spread operator로 처리해봤으나 메모리 손실이 더 큼
