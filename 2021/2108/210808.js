// Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// 주어진 배열에서 자릿수가 짝수개인 요소의 갯수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0;

  for (const num of nums) {
    num.toString().length % 2 === 0 && ++result;
  }

  return result;
};

// 숫자 타입에선 길이를 구할 수 없으므로 문자열 변환 후 길이를 구함
