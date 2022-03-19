// First Bad Version

// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check.
// Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad.
// Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example:
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// 주어진 숫자만큼의 버전 내에서 isBadVersion을 통해 badVersion을 찾았을때, 가장 먼저 문제가 된 version을 반환하는 문제

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (isBadVersion(mid) === false) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return start;
  };
};
// 최근에 풀었던 문제(220314) 중에 O(log n)으로 풀었던 문제가 있어서 그대로 적용
