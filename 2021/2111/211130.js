// Check If All 1's Are at Least Length K Places Away

// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

// Example:
// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

// 주어진 배열에서 모든 1 사이의 거리가 k보다 큰 지에 대한 여부를 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    // 기준이 0인 경우는 필요없음
    if (nums[i] === 0) continue;
    // 거리 저장
    let temp = 0;

    for (let j = i + 1; j < nums.length; j++) {
      // 0이면 거리 증가
      if (nums[j] === 0) temp++;
      // 1이면 거리 확인, k보다 작으면 조기 반환
      if (nums[j] === 1) {
        if (temp < k) return false;
        // 거리 확인 이후, 거리 증가 (이때는 1도 거리에 포함되기 때문)
        temp++;
      }
    }
  }
  return true;
};
