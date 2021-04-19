// Reduce Array Size to The Half

// Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Example:
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.

// 주어진 배열의 사이즈를 절반 이하로 줄일 수 있는 숫자 집합의 최소 갯수를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const size = arr.length;
  const halfSize = size / 2; // 이 로직의 기준인 절반
  let result = 0;

  const map = new Map();

  // array 요소를 key, 갯수를 value로 하는 map을 만든다.
  for (let i = 0; i < size; i++) {
    if (map.has(arr[i])) {
      let count = map.get(arr[i]);
      map.set(arr[i], ++count);
    } else {
      map.set(arr[i], 1);
    }
  }

  // 만들어진 맵을 배열로 전환하고 갯수의 내림차순으로 정렬한다.
  const mapToArr = Array.from(map).sort((a, b) => b[1] - a[1]);

  // 배열을 순회하면서 result에 값을 추가한다.
  for (let j = 0; j < mapToArr.length; j++) {
    if (j !== 0) {
      mapToArr[j][1] = mapToArr[j - 1][1] + mapToArr[j][1]; // 누적된 갯수를 확인한다.
      if (mapToArr[j][1] >= halfSize) {
        result += 1;
        break;
      } else {
        result += 1;
      }
    } else {
      if (mapToArr[j][1] >= halfSize) {
        result = 1;
        break;
      } else {
        result += 1;
      }
    }
  }

  return result;
};
