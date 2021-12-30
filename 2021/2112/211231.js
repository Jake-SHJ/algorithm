// Three Divisors

// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.

// Example:
// Input: n = 2
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.

// 주어진 숫자가 무조건 3개의 숫자만으로 나눠지는지 여부를 반환하는 문제

// 3개의 숫자로만 나눠지는 경우 = 1, 숫자 자신, + 제곱했을때 숫자 자신이 되지만, 스스로는 다른 수로 나눠지면 안되는 수 = 소수
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  // 1은 1개 무조건 false
  if (n === 1) return false;
  const sqrt = Math.sqrt(n);
  // 제곱근이 실수인 경우는 false
  if (sqrt !== parseInt(sqrt)) return false;
  // 제곱근이 2면 소수, 무조건 true (2를 따로 둔 이유는 아래의 반복문이 2부터 시작하기 때문, 2는 2로 나누면 당연히 나머지가 0)
  if (sqrt === 2) return true;
  // 제곱근이 다른 수에 의해 나눠지면 소수가 아니므로 false
  for (let i = 2; i < sqrt; i++) {
    if (sqrt % i === 0) return false;
  }

  return true;
};
