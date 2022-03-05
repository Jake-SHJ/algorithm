// Power of Four

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example:
// Input: n = 16
// Output: true

// 주어진 수가 4의 x제곱의 수인지 여부를 반환하는 문제

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 1이나 0은 조기 반환
  if (n === 1) return true;
  if (n === 0) return false;

  const divideFour = (num) => {
    // 결과가 4면 true
    if (num === 4) return true;
    // 4로 나누기
    const divided = num / 4;
    // 나눴는데 정수가 아니면 false
    if (divided % 1 !== 0) return false;
    // 재귀
    return divideFour(divided);
  };
  // 재귀 호출
  return divideFour(n);
};
