// Finding Pairs With a Certain Sum

// You are given two integer arrays nums1 and nums2. You are tasked to implement a data structure that supports queries of two types:
// 1. Add: a positive integer to an element of a given index in the array nums2.
// 2. Count: the number of pairs (i, j) such that nums1[i] + nums2[j] equals a given value (0 <= i < nums1.length and 0 <= j < nums2.length).
// Implement the FindSumPairs class:
// FindSumPairs(int[] nums1, int[] nums2) Initializes the FindSumPairs object with two integer arrays nums1 and nums2.
// - void add(int index, int val) Adds val to nums2[index], i.e., apply nums2[index] += val.
// - int count(int tot) Returns the number of pairs (i, j) such that nums1[i] + nums2[j] == tot.

// Example:
// Input
// ["FindSumPairs", "count", "add", "count", "count", "add", "add", "count"]
// [[[1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]], [7], [3, 2], [8], [4], [0, 1], [1, 1], [7]]
// Output
// [null, 8, null, 2, 1, null, null, 11]
// Explanation
// FindSumPairs findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
// findSumPairs.count(7);  // return 8; pairs (2,2), (3,2), (4,2), (2,4), (3,4), (4,4) make 2 + 5 and pairs (5,1), (5,5) make 3 + 4
// findSumPairs.add(3, 2); // now nums2 = [1,4,5,4,5,4]
// findSumPairs.count(8);  // return 2; pairs (5,2), (5,4) make 3 + 5
// findSumPairs.count(4);  // return 1; pair (5,0) makes 3 + 1
// findSumPairs.add(0, 1); // now nums2 = [2,4,5,4,5,4]
// findSumPairs.add(1, 1); // now nums2 = [2,5,5,4,5,4]
// findSumPairs.count(7);  // return 11; pairs (2,1), (2,2), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,4) make 2 + 5 and pairs (5,3), (5,5) make 3 + 4

// 주어진 연산을 하는 함수를 구현하는 문제

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  this.nums2.splice(index, 1, this.nums2[index] + val);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let result = 0;

  for (let i = 0; i < this.nums1.length; i++) {
    for (let j = 0; j < this.nums2.length; j++) {
      this.nums1[i] + this.nums2[j] === tot ? (result += 1) : null;
    }
  }

  return result;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

// 쉽다고 생각하고 풀었으나 배열의 크기가 큰 경우 time out이 나버리는 문제 발생
// 아무래도 count에서 중첩 순회문 때문이라고 판단

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.map = new Map();
  for (const num of nums2) {
    this.map.set(num, (this.map.get(num) || 0) + 1);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  this.map.set(this.nums2[index], this.map.get(this.nums2[index]) - 1);
  this.nums2[index] += val;
  this.map.set(this.nums2[index], (this.map.get(this.nums2[index]) || 0) + 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let result = 0;
  for (const num of this.nums1) {
    if (num > tot) continue;
    result += this.map.get(tot - num) || 0;
  }
  return result;
};
// discuss 참고, map을 통해 nums2를 쉽게 관리하도록 데이터 구조를 변경하였음
