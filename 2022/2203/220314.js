// Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// 주어진 배열에서 target이 있으면 그 인덱스를, 없으면 target이 들어갈 인덱스를 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};
// discuss 참조
// O(log n)으로 풀라고 해서, 반씩 줄어드는 컨셉은 생각했으나 로직을 구현하지 못함
