// Convert a Number to Hexadecimal

// Given an integer num, return a string representing its hexadecimal representation.
// For negative integers, two’s complement method is used.
// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
// Note: You are not allowed to use any built-in library method to directly solve this problem.

// Example 1:
// Input: num = 26
// Output: "1a"

// Example 2:
// Input: num = -1
// Output: "ffffffff"

// Constraints:
// -2^31 <= num <= 2^31 - 1

// 내장 함수를 사용하지 않고 주어진 수를 16진수 문자열로 나타내는 문제

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  var arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  if (num == 0) return "0";

  if (num < 0) {
    num += Math.pow(2, 32);
    // 주어진 num의 범위는 32비트 정수
    // "32비트 정수(int)"에서의 -1과, "부호 없는, 32비트 정수(unsigned int)"에서의 4294967295 는, 십육진수인 FFFFFFFF 로 똑같이 표현된다.
  }

  var res = "";

  while (num > 0) {
    var digit = num % 16;
    res = arr[digit] + res;
    num = Math.floor(num / 16);
  }

  return res;
};

// discuss 참조, 음수에 대한 16진수의 정의를 잘 알지 못했음, 음수가 없으면 사실 내장 함수 쓰는게 나음..
