// Consecutive Characters

// The power of the string is the maximum length of a non-empty substring that contains only one unique character.
// Given a string s, return the power of s.

// Example:
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// 주어진 문자열에서 연속해서 같은 문자가 나오는 경우 중 가장 많이 나오는 경우의 횟수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  // 조기 반환
  if (s.length === 1) return 1;
  // 일단 맨처음꺼 세고 시작
  let temp = 1;
  // 문자열이 끊어질 때마다 push
  let counts = [];

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      // 연속이면 카운트 증가
      temp++;
    } else {
      // 아니면 push, 그리고 카운트 초기화
      counts.push(temp);
      temp = 1;
    }
    // 마지막일때 push
    if (i === s.length - 1) {
      counts.push(temp);
    }
  }
  // 그 중 가장 큰 수
  return Math.max(...counts);
};
