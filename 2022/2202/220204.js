// Find Pivot Index

// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly
// to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.
// This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// Example:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// 주어진 배열에서 양 요소들의 합이 동일한 축 인덱스를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const center = Math.floor(nums.length / 2);

  const helper = (pivot, direction = "") => {
    const left = nums.slice(0, pivot).reduce((acc, cur) => acc + cur, 0);
    const right = nums.slice(pivot + 1).reduce((acc, cur) => acc + cur, 0);

    if (left === right) return pivot;

    if (
      (direction === "left" && left < right) ||
      (direction === "right" && right < left) ||
      pivot === nums.length - 1 ||
      pivot === 0
    )
      return -1;

    if (direction !== "right" && left > right) return helper(pivot - 1, "left");
    if (direction !== "left" && right > left) return helper(pivot + 1, "right");
  };

  return helper(center);
};
// 재귀를 통해서 시도는 했으나, 양옆이 -1면 문제가 있음
// 순회를 전부 안돌아도 되는 장점은 있으나, 모든 케이스를 커버하지 못함
// 이번 문제도 어렵게 생각한것 같음

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  let sumL = 0,
    sumR = sum;

  for (let i = 0; i < nums.length; i++) {
    sumR -= nums[i];
    if (sumL === sumR) return i;
    sumL += nums[i];
  }

  return -1;
};
// discuss 참조, 다 더해두고 빼면서 확인..
// 축이 없는 경우 끝까지 순회해야하는 단점은 있지만, 양음수 상관없이 확인 가능
