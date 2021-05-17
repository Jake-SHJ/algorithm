// Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:
// Input: n = 1
// Output: true
// Explanation: 2^0 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  while (n >= 2) {
    n = n / 2;
  }

  return n === 1;
};

// 어제 문제에서 3이 2로 바뀐 케이스.
// 많은 조건 없이 n을 2로 나눌 수 있을때까지 나눠서 결과가 1이면 true 아니면 false
// 어제 답안에 비해 많이 개선됨, 불필요한 조건문들을 전부 제거, 굳이 사용하지 않아도 될 삼항연산자 제거
