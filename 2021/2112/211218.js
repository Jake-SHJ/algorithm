// Rank Transform of an Array

// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is. The rank has the following rules:
// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Example:
// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

// 주어진 배열을 순위를 매긴 배열로 변환하여 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // sort로 배열 원형이 변경되므로 origin 복사
  const origin = Array.from(arr);
  // 오름차순 정렬 후, 중복 제거
  const set = new Set(arr.sort((a, b) => a - b));
  const map = new Map();
  let count = 1;
  // 숫자마다 순위 등록
  for (const num of set) {
    map.set(num, count);
    count++;
  }
  // 해당 숫자에 맞는 순위 추적
  const result = origin.map((el) => {
    return map.get(el);
  });
  return result;
};
