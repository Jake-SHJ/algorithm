// Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternArray = Array.from(pattern);
  const stringArray = s.split(" ");
  const patternMap = new Map();
  let result = true;
  if (stringArray.length !== patternArray.length) {
    return (result = false);
  }
  for (let i = 0; i < patternArray.length; i++) {
    if (
      patternMap.get(patternArray[i]) &&
      patternMap.get(patternArray[i]) !== stringArray[i]
    ) {
      return (result = false);
    }
    if (
      Array.from(patternMap.values()).includes(stringArray[i]) &&
      !patternMap.has(patternArray[i])
    ) {
      return (result = false);
    }
    patternMap.set(patternArray[i], stringArray[i]);
  }
  return result;
};
// 첫번째 접근, pattern, string을 배열로 만들고 Map으로 만들어서 확인, 키-밸류 길이 안맞는 상황 예외처리
// 다른 키인데 같은 밸류이면 false 처리

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternArray = pattern.split("");
  const stringArray = s.split(" ");
  const obj = {};
  if (
    stringArray.length !== patternArray.length ||
    new Set(patternArray).size !== new Set(stringArray).size
  ) {
    return false;
  }

  for (let i = 0; i < patternArray.length; i++) {
    if (obj[patternArray[i]] && obj[patternArray[i]] !== stringArray[i]) {
      return false;
    } else {
      obj[patternArray[i]] = stringArray[i];
    }
  }

  return true;
};
// 두번째 접근, 배열 길이에 set 길이 비교로 더 빠른 false 반환
// 중복 밸류에 대한 부분만 따로 예외처리, 속도, 메모리 효율 둘 다 중간 수준
