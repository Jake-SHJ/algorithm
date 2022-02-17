// Check if Array Is Sorted and Rotated

// Given an array nums, return true if the array was originally sorted in non-decreasing order,
// then rotated some number of positions (including zero). Otherwise, return false.
// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length],
// where % is the modulo operation.

// Example:
// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

// 주어진 배열이 순환하였을 때, 오름차순을 만족하는지 여부를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let idx;
  // 가장 작은 수가 시작지점
  const min = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    // 시작지점과 값이 같고, 큰 수의 바로 뒤에 있는 경우
    if (nums[i] === min && nums[i - 1] > nums[i]) {
      idx = i;
    }
  }
  // 시작 idx를 맨 앞으로 보내는 배열 생성 및 비교를 위해 JSON.stringify
  const newArr = idx
    ? JSON.stringify([...nums.slice(idx), ...nums.slice(0, idx)])
    : JSON.stringify(nums);
  // 실제 오름차순 정렬한 배열의 JSON.stringify
  const sortedArr = JSON.stringify(nums.sort((a, b) => a - b));
  // 일치 연산으로 같으면 true
  if (newArr === sortedArr) return true;
  // 아니면 false
  return false;
};
