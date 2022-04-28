// Count Triplets That Can Form Two Arrays of Equal XOR

// Given an array of integers arr.
// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).
// Let's define a and b as follows:
// a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
// b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
// Note that ^ denotes the bitwise-xor operation.
// Return the number of triplets (i, j and k) Where a == b.

// Example:
// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

// 주어진 배열에서 규칙에 부합하는 세 인덱스의 갯수를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr.slice(i, j + 1).reduce((acc, cur) => acc ^ cur) === 0) {
        result += j - i;
      }
    }
  }

  return result;
};
// discuss 참조.. 여전히 xor은 잘 모르겠음..
