// Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// 주어진 배열이 하나의 숫자를 각 자리수별로 나눠둔 숫자일 때, 1을 더한 값의 배열을 반환하는 문제

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1,
    k = 1;
  const res = [];

  while (i >= 0 || k > 0) {
    if (i >= 0) {
      res.push((digits[i] + k) % 10);
      k = Math.trunc((digits[i] + k) / 10);
      i--;
    } else {
      res.push(k % 10);
      k = Math.trunc(k / 10);
    }
  }

  return res.reverse();
};
// 220228 문제와 같은 유형의 문제
// k를 따로 주지 않고 1로 고정되어 있다는 점만 다르고 똑같음
