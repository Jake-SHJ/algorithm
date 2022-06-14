// Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// 주어진 문자열에서 나올 수 있는 회문의 경우의 수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  // 각 문자는 모두 회문
  let res = s.length;
  // 전체 문자열 순회
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      str += s[j];
      if (str === str.split("").reverse().join("")) res++;
    }
  }

  return res;
};
// 시도는 했으나 시간 초과

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = 0;

  const bubbleFromCenter = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      res++; l--; r++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    bubbleFromCenter(i, i);
    bubbleFromCenter(i, i + 1);
  }

  return res;
};
// discuss 참조 답안, 배열 조작이 없어서 순회가 더 빠름
