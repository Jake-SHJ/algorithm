// Unique Number of Occurrences

// Given an array of integers arr, write a function that returns true if and only if
// the number of occurrences of each value in the array is unique.

// Example:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// 주어진 배열에서 각각의 요소의 갯수가 전부 다른 경우 true를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const values = [...map.values()];
  const set = new Set(values);

  return values.length === set.size;
};

// map으로 각 요소별 갯수를 저장
// 변수 values에 갯수들을 배열로 반환
// set으로 유니크하지 않은 경우를 필터
// values의 요소 갯수와 set의 size가 동일하면 모든 수가 유니크한 갯수로 존재
