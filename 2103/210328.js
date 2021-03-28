// Minimum Number of Steps to Make Two Strings Anagram

// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Example:
// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

// s의 애너그램으로 바꾸기 위해서 t를 얼마나 수정해야하는가에 대한 문제

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const arrayT = t.split("");
  const arrayS = s.split("");
  for (let i = 0; i < arrayS.length; i++) {
    const hasCharacter = arrayT.indexOf(arrayS[i]);
    if (hasCharacter !== -1) {
      arrayT.splice(hasCharacter, 1);
    }
  }
  return arrayT.length;
};
// 처음엔 array로 바꾸고 for 문으로 풀었더니, time limit를 넘겨버림.. 문자열이 많아지면 문제가 생긴다

var minSteps = function (s, t) {
  let result = 0;
  const sSet = new Set(s.split(""));
  const tSet = new Set(t.split(""));
  result += t.length - tSet.size;
  sSet.forEach((sCharacter) => {
    if (tSet.has(sCharacter)) {
      tSet.delete(sCharacter);
    }
  });
  return (result += tSet.size);
};
// 그래서 Set으로 풀었는데, 중복된 값을 무조건 빼버렸더니 이미 애너그램인 값도 중복된 문자열이 있으면 무조건 result에 추가 되버림

var minSteps = function (s, t) {
  let result = 0;
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 1);
    tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 1);
  }

  for (const tKey of tMap.keys()) {
    if (sMap.has(tKey) && sMap.get(tKey) < tMap.get(tKey)) {
      result += tMap.get(tKey) - sMap.get(tKey);
    } else if (!sMap.has(tKey)) {
      result += tMap.get(tKey);
    }
  }

  return result;
};
// 통과한 최종 답안
// Map으로 문자열을 ket / 갯수를 value로 넣고
// s에 t 문자열이 있고, t가 s보다 많은 경우 그리고 s에 t 문자열이 없는 경우를 result에 추가하여 갯수를 구할 수 있었다.
