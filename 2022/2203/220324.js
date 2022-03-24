// Contains Duplicate II

// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// 주어진 배열의 숫자 중 같은 숫자의 인덱스의 차가 k보다 작은지 여부를 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const isDup = map.has(num);
    if (isDup && Math.abs(i - map.get(num)) <= k) return true;
    map.set(num, i);
  }

  return false;
};
// discuss 참조, Set으로 풀었는데 중첩 for문 때문에 통과 안됨
