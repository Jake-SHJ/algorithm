// First Unique Character in a String

// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example:
// Input: s = "leetcode"
// Output: 0

// 주어진 문자열에서 한글자만 존재하는 문자 중 첫번째 문자의 index를 반환하거나 없으면 -1을 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  const result = [];

  // map에 문자와 갯수를 저장
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
  }

  // 순회돌면서 갯수가 1인 문자열 저장
  for (const a of map.entries()) {
    if (a[1] === 1) result.push(s.indexOf(a[0]));
  }

  // 결과의 갯수가 0이면 -1을 아니면 그 중 가장 작은 값을 반환
  return result.length === 0 ? -1 : Math.min(...result);
};
