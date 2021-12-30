// Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

// Example:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// 주어진 두 정수의 서로 다른 비트의 수를 구하는 문제

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).replace(/0/g, "").length;
};
// distance라고 적혀있어서 뭔가 거리를 구하는 문제로 착각
// XOR 연산으로 서로 다른 비트를 1로 확인, 0을 제거한 1의 총 갯수를 반환
