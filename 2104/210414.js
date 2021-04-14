// Find All Duplicates in an Array

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice,
// return an array of all the integers that appears twice.

// Example:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// 주어진 배열에서 중복된 인자를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const set = new Set(nums);
  set.forEach((num) => {
    nums.splice(nums.indexOf(num), 1);
  });
  return nums;
};
// 처음 시도, nums를 Set으로 중복을 제거하고 nums에서 set을 지워나가는 방법
// 결과는 성공이지만, Set 순회 + nums의 index 찾기에 의한 순회에 의해서 성능이 좋지 못했다.

var findDuplicates = function (nums) {
  const set = new Set();
  const result = [];
  for (const num of nums) {
    set.has(num) ? result.push(num) : set.add(num);
  }
  return result;
};
// discuss를 참고해서 변형한 답안
// 빈 Set을 만들고 nums만 순회하여 Set에 없으면 Set에 추가하고, 있으면 result에 넣는 방식
// 순회가 줄어서 성능 개선이 되었다.
