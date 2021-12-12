// Largest Substring Between Two Equal Characters

// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters.
// If there is no such substring return -1.
// A substring is a contiguous sequence of characters within a string.

// Example:
// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

// 주어진 문자열에서 같은 문자 사이의 substring이 가장 긴 경우의 길이를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    // 끝쪽부터 인덱스 추적
    const idx = s.lastIndexOf(s[i]);
    // 현재 타겟과 끝쪽부터 찾은 인덱스가 서로 다르면 그 사이의 substring 길이를 결과값과 비교
    if (i !== idx) {
      const sub = idx - i - 1;
      sub > result ? (result = sub) : null;
    }
  }

  return result;
};
