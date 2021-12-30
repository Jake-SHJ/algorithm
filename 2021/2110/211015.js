// Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.
// If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// 주어진 nums1의 요소를 nums2에서 찾고, nums2의 해당 요소 이후 요소 중 해당 요소보다 큰 첫번째 숫자를 배열에 넣어서 반환하는 문제

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    // nums2 위치
    const idx = nums2.indexOf(nums1[i]);
    for (let j = idx + 1; j < nums2.length; j++) {
      // nums2 이후 위치부터 nums2보다 큰 수가 등장하면 결과에 넣고 바로 break
      if (nums2[j] > nums2[idx]) {
        result.push(nums2[j]);
        break;
      }
    }
    // 순회를 돌았는데 push된 값이 없으면 -1 결과에 push
    if (!result[i]) result.push(-1);
  }
  return result;
};
