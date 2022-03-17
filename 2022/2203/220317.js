// Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

// Example:
// Input: s = "egg", t = "add"
// Output: true

// 주어진 2 문자열이 같은 패턴으로 이루어져 있는지 여부를 반환하는 문제

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 중복된 문자열 체크를 위한 map
  const sMap = new Map();
  const tMap = new Map();
  // 문자열마다 인덱스 부여
  let sCount = 0,
    tCount = 0;
  // 인덱스로 패턴 저장
  const sArr = [],
    tArr = [];

  for (let i = 0; i < s.length; i++) {
    // 이미 있는 문자열이면 해당 인덱스를 패턴에 저장
    if (sMap.has(s[i])) {
      sArr.push(sMap.get(s[i]));
      // 없으면 map에 새로 저장하고 인덱스를 패턴에 저장
    } else {
      sMap.set(s[i], sCount);
      sArr.push(sCount);
      sCount++;
    }

    if (tMap.has(t[i])) {
      tArr.push(tMap.get(t[i]));
    } else {
      tMap.set(t[i], tCount);
      tArr.push(tCount);
      tCount++;
    }
  }
  // 패턴 비교
  return JSON.stringify(sArr) === JSON.stringify(tArr);
};
