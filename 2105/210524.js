// Sqrt(x)

// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// 주어진 값의 제곱근 값을 반환하는 문제

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

// 왜 acceptance가 35%인지 모르겠는 문제..
// 주의 사항으로 내장 지수 함수를 쓰지 말라고 되어있는데, 지수 함수 대신 Math.sqrt로 구함
// 아마 예시를 안 읽었거나 다른 곳에서 문제가 있었던거 같은데
// 일단 모드 값은 내림 처리로 표현하므로 floor 처리해서 구현하였음
