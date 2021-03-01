// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example:

// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversedX =
    parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
  if (reversedX > 2 ** 31 - 1 || reversedX < 2 ** 31 * -1) {
    return 0;
  }
  return reversedX;
};

// 처음에 숫자 크기 제한 있는줄 모르고 return parseInt(x.toString().split("").reverse().join("")) * Math.sign(x); 한줄로 끝낼수 있을줄 알았음
// 문제를 잘 읽어볼 것...

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversedX =
    parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
  if (Math.abs(reversedX) > 0x7fffffff) return 0;
  return reversedX;
};

// 찾아보니 abs로 절댓값으로 판단하는 방법이 있더라 뭐 큰차이는 없었지만 이런 메서드가 있다는 것을 기억해둘 것
