// Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// Example:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// 주어진 배열의 요소를 역전시키는 문제

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const a = s[i],
      b = s[j];
    s[i] = b;
    s[j] = a;
  }
};
// 반환값 없이 직접 수정, 앞뒤로 바꾸면 횟수가 절반으로 줄어듬
// 속도 측정을 딱히 신뢰할 수는 없지만, 사실 s.reverse();가 더 빠르더라..
