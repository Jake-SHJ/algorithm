// Repeated Substring Pattern

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// 주어진 문자열이 반복되는 문자열인지 반환하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }

  const result = true;
  const half = s.length / 2;
  const left = s.slice(0, half);
  const right = s.slice(half);

  for (let i = 0; i < half; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }

  return result;
};
// 단순히 반으로 쪼개서 확인하는 방법, 하지만 "ababab" 같이 홀수로 반복하는 경우는 알 수 없음

var repeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};
// discuss에 있는 대다수의 답
// 문자열을 2번 반복하고 앞뒤로 잘라낸 다음, 문자열을 포함하는지 확인하면 해당 문자열이 반복인지 아닌지 확인이 가능 (이걸 알고 있다는게 더 놀라움)
