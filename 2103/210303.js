// Partitioning Into Minimum Number Of Deci-Binary Numbers

// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros.
// For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

// Example:
// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max.apply(null, n.split(""));
};

// 뭔가 어려운 문제인줄 알았으나.. 주어진 양의 정수에서 가장 큰 수를 찾으면 최소 이진수 갯수를 구할 수 있음
// 따라서, 주어진 n을 배열로 만들고 그중 가장 큰수를 찾는 Math의 max 메서드를 적용하여 찾음
