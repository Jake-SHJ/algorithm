// Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.

// Example:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// 주어진 두 배열에 교차되는 요소를 반환하는 문제

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = Array.from(new Set(nums1));
  const set2 = Array.from(new Set(nums2));

  const result = [];

  if (set1.length > set2.length) {
    for (const num of set1) {
      set2.includes(num) ? result.push(num) : null;
    }
  } else {
    for (const num of set2) {
      set1.includes(num) ? result.push(num) : null;
    }
  }

  return result;
};
