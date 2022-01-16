// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// 주어진 두 배열에서 공통된 요소를 반환하는 문제

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        // 각 배열의 숫자범위는 양의 정수, 따라서 -1로 교체하면 배열의 길이를 보존하고, 중복의 문제를 해결
        nums2.splice(j, 1, -1);
        break;
      }
    }
  }

  return result;
};
