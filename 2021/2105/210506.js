// Sort an Array

// Given an array of integers nums, sort the array in ascending order.

// Example:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// 주어진 배열을 오름차순으로 정렬하여 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }

  return nums;
};

// 느리긴 하지만 바로 생각난 버블 정렬로 풀이(가까스로 runtime 넘긴 것 같음)
// 역시나 sort 메서드 자체는 막혀있는 상태
// 다른 정렬에 대한 알고리즘도 공부를 해야할 것 같음.. 타임아웃 시간이 조금이라도 모자라면 통과하지 못할 것 같음
