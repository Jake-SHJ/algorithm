// Palindrome Number

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

// Example:
// Input: x = 121
// Output: true

// 주어진 숫자가 회문인지 판단하여 반환하는 문제

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 0보다 작으면 -부호를 가지고 있으므로 회문이 될 수 없음
  if (x < 0) return false;

  // 숫자보다 문자열이 순회나 조작하기 쉬우므로 형변환
  const strX = x.toString();
  // 숫자가 1개면 무조건 회문
  if (strX.length === 1) return true;

  let left, right, result;

  // 길이가 홀짝인지에 따라 문자열을 양쪽으로 갈라냄
  // 순회시 한번에 비교하기 쉽도록 오른쪽은 반전시킴
  if (strX.length % 2 === 1) {
    const center = Math.floor(strX.length / 2);
    left = strX.slice(0, center);
    right = strX
      .slice(center + 1)
      .split("")
      .reverse()
      .join("");
  } else {
    left = strX.slice(0, strX.length / 2);
    right = strX
      .slice(strX.length / 2)
      .split("")
      .reverse()
      .join("");
  }

  // 문자열 비교
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return (result = false);
    } else {
      result = true;
    }
  }

  return result;
};
