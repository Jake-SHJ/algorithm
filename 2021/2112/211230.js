// Count Special Quadruplets

// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:
// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d

// Example:
// Input: nums = [1,2,3,6]
// Output: 1
// Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.

// 주어진 배열에서 3개의 요소의 합이 배열에 존재하는 경우 그 개수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        // i < j < k < sum 이므로 k보다 큰 인덱스에서 찾음
        const find = nums.slice(k + 1).filter((num) => num === sum);
        result += find.length;
      }
    }
  }
  return result;
};
