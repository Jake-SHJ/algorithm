// Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values.
// If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.

// Example:
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// 주어진 배열을 빈도순으로 정렬하고, 빈도가 같은 경우 내림차순으로 정렬하여 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = new Map();

  // Map에 빈도 저장
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 빈도 비교하여 같으면 내림차순, 다르면 빈도 오름차순
  return nums.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return b - a;
    }
    return map.get(a) - map.get(b);
  });
};
