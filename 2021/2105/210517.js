// Power of Three

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example:
// Input: n = 27
// Output: true

// 주어진 값이 3의 거듭제곱인지 판별하는 문제

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0 || n === 2) return false;

  while (n >= 3) {
    n = n / 3;
  }

  return n === 1 && Math.sign(n) === 1 ? true : false;
};

// js에서 Math.cbrt()라는 세제곱근을 반환하는 메서드가 있음
// 하지만 9을 넣으면 2가 아닌 2를 조금 넘는 소숫점 단위가 나와서 정수 확인시 문제 발생
// 따라서 직접 3으로 나눠서 1이 나올 때 까지 순회 돌려서 확인
