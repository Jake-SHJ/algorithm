// Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => a - b);
};
// return 값 없이 배열을 직접 조작하는 유형이다.
// 첫번째 접근은 메모리 효율은 99%가 나왔으나 속도는 23%에 그쳤다.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1.splice(m, 1, nums2[i]);
    ++m;
  }
  nums1.sort((a, b) => a - b);
};

// 두번째는 절차를 한단계 줄였다.
// 속도가 68%까지 올랐고, 메모리 효율은 98%로 크게 변화하지 않았다.
// 처음으로 풀이한 내용을 해당 문제의 discuss에 post해두었다. 다른 풀이 방식들이 메모리 효율이 그렇게 좋지 않았다.
