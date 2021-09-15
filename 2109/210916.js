// Sort Integers by The Number of 1 Bits

// Given an integer array arr.
// You have to sort the integers in the array in ascending order by the number of 1's
// in their binary representation and in case of two or more integers have the same number of 1's
// you have to sort them in ascending order.
// Return the sorted array.

// Example:
// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]

// 주어진 배열의 요소를 2진수로 전환했을때 1의 개수가 적은 순서대로 정렬하여 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let bitMap = new Map();
  arr.map((el) =>
    bitMap.set(
      el,
      el
        .toString(2)
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0)
    )
  );
  return arr.sort((a, b) =>
    bitMap.get(a) == bitMap.get(b) ? a - b : bitMap.get(a) - bitMap.get(b)
  );
};
// 1의 개수를 저장하는 Map을 활용, 같은 값일 경우 실제 값을 비교하여 정렬
