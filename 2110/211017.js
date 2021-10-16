// Two Out of Three

// Given three integer arrays nums1, nums2, and nums3,
// return a distinct array containing all the values that are present in at least two out of the three arrays.
//  You may return the values in any order.

// Example:
// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.

// 3개의 주어진 배열에서 적어도 2회 이상 등장하는 숫자의 배열을 반환하는 문제

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let map = new Map();

  // 내부에 중복되는 숫자는 필요없어서 set으로 중복을 삭제
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);

  // 모든 배열을 하나로 통합
  const nums = [...set1, ...set2, ...set3];

  // map에 개수와 함께 저장
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // map을 array로 변환 > 2개 이상인 경우만 필터 > 배열에서 숫자만 꺼내기
  return Array.from(map)
    .filter((num) => num[1] >= 2)
    .map((num) => num[0]);
};
