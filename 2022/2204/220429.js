// Count Number of Maximum Bitwise-OR Subsets

// Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and
// return the number of different non-empty subsets with the maximum bitwise OR.
// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.
// Two subsets are considered different if the indices of the elements chosen are different.
// The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).

// Example:
// Input: nums = [3,1]
// Output: 2
// Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
// - [3]
// - [3,1]

// 주어진 배열에서 subset의 bitwise OR 연산값이 최대가 될 수 있는 모든 경우의 수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let n = nums.length,
    len = Math.pow(2, n),
    answer = 0,
    hash = {};
  // tmp = bitwise OR 연산값
  for (let i = 0; i < len; i++) {
    let tmp = 0;
    for (let j = 0; j < n; j++) {
      // ???
      if (i & (1 << j)) {
        tmp |= nums[j];
        // tmp = tmp | nums[j];
      }
    }
    if (hash[tmp]) {
      hash[tmp] += 1;
    } else {
      hash[tmp] = 1;
    }
    answer = Math.max(answer, tmp);
  }

  return hash[answer];
};
// discuss 참조.. 여전히 어려운 bitwise 연산
