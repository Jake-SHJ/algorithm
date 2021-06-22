// Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// 주어진 배열에 타겟이 있으면 인덱스를, 없으면 -1을 반환하는 문제. 단, 시간복잡도는 O(log n)이어야 함

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = ((left + right) / 2) | 0;

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

// O(log n)이라는 시간복잡도 제한이 있어서 막힌 문제
// 사실 그렇게 어려운 건 아니고, 대상을 절반씩 줄여나가면 log n의 시간 복잡도를 가지게 됨
// 위의 답안은 discuss 참고
