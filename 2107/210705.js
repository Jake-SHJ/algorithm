// Decode XORed Array

// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1].
// For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array.
// You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr.
// It can be proved that the answer exists and is unique.

// Example:
// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

// 주어진 encode된 배열을 최초의 수 first를 이용하여 decode된 배열을 반환하는 문제

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const arr = [first];

  for (let i = 0; i < encoded.length; i++) {
    arr.push(arr[i] ^ encoded[i]);
  }

  return arr;
};
// XOR 연산으로 encode된 배열을 다시 first와 함께 XOR 연산을 돌리면 decode됨
