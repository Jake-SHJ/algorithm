// Can Make Arithmetic Progression From Sequence

// A sequence of numbers is called an arithmetic progression
// if the difference between any two consecutive elements is the same.
// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression.
// Otherwise, return false.

// Example:
// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

// 주어진 배열의 요소들이 연속적으로 산술적인 값이 같은지 여부를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  const map = new Map();

  for (let i = 0; i < arr.length - 1; i++) {
    map.set(
      sortedArr[i] - sortedArr[i + 1],
      (map.get(sortedArr[i] - sortedArr[i + 1]) || 0) + 1
    );
  }

  return map.size === 1;
};
// map에 저장해서 size로 판단, map의 저장으로 인해 메모리 손실

var canMakeArithmeticProgression = function (arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  const diff = sortedArr[0] - sortedArr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    if (sortedArr[i] - sortedArr[i + 1] !== diff) {
      return false;
    }
  }

  return true;
};
// map 대신 대표값을 하나만 저장해두고 비교해보는 방식, map보다 속도면이나 메모리면에서 성능 향상
