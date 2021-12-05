// Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// 주어진 숫자의 각 자릿수를 더해서 한자리만 남았을 때의 결과를 반환하는 문제

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 한자리면 반환
  if (num.toString().length === 1) return num;
  // 문자열화 > 자릿수 분리 > 자릿수 합 재귀
  return addDigits(
    num
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0)
  );
};
