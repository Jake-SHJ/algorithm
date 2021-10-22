// Minimum Value to Get Positive Step by Step Sum

// Given an array of integers nums, you start with an initial positive value startValue.
// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

// Example:
// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
//                 step by step sum
//                 startValue = 4 | startValue = 5 | nums
//                   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//                   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//                   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//                   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//                   (4 +2 ) = 6  | (5 +2 ) = 7    |   2

// 주어진 배열의 값들을 임의의 양수와 더해나갈 때, 각 덧셈의 결과가 1이 넘도록 하는 양수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let sums = [nums[0]];

  nums.reduce((acc, cur) => {
    sums.push(acc + cur);
    return acc + cur;
  });

  const min = Math.min(...sums);
  if (min < 0) return Math.abs(min - 1);
  return 1;
};
// 누적되는 덧셈에서 가장 작은 음수보다 1이 큰 양수(-3이면 4)가 정답
// 누적 덧셈을 sums에 저장하고 min이 음수면 min보다 1이 큰 양수 반환, min이 양수면 무조건 1
