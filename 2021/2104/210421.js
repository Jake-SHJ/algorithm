// Number of Good Ways to Split a String

// You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q
// where its concatenation is equal to s and the number of distinct letters in p and q are the same.
// Return the number of good splits you can make in s.

// Example:
// Input: s = "aacaba"
// Output: 2
// Explanation: There are 5 ways to split "aacaba" and 2 of them are good.
// ("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
// ("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
// ("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
// ("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
// ("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.

// 주어진 문자열을 2개로 갈랐을 때, 양쪽의 중복되지 않은 요소의 갯수가 동일한 경우의 수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const splitedStrSet1 = new Set(s.slice(0, i + 1).split(""));
    const splitedStrSet2 = new Set(s.slice(i + 1, s.length).split(""));

    if (splitedStrSet1.size === splitedStrSet2.size) {
      result += 1;
    }
  }

  return result;
};
// 각 분리된 문자열을 Set에 넣고 사이즈를 비교, 시간 초과에 걸림

var numSplits = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const splitedStrSet1 = new Set(s.slice(0, i + 1));
    const splitedStrSet2 = new Set(s.slice(i + 1, s.length));
    if (splitedStrSet1.size === splitedStrSet2.size) {
      result += 1;
    }
  }

  return result;
};
// split 빼도 같은 결과임을 확인하고 재도전, 역시나 시간초과

var numSplits = function (s) {
  let result = 0;
  const arr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (new Set(arr.slice(0, i + 1)).size === new Set(arr.slice(i + 1)).size) {
      result += 1;
    }
  }

  return result;
};
// 사실 변수 인라인화 한거 말곤 없어서 같은 결과를 보았다.

var numSplits = function (s) {
  let set1 = new Set(),
    set2 = new Set();
  let arr = [],
    res = 0;
  for (let i = 0; i < s.length; i++) {
    set1.add(s[i]);
    arr[i] = set1.size;
  }
  for (let j = s.length - 1; j > 0; j--) {
    set2.add(s[j]);
    if (arr[j - 1] === set2.size) res++;
  }
  return res;
};
// discuss 참고
// 두 개의 Set에 각각 넣으면서 따로 생성해둔 arr에 size를 저장, index는 들어간 문자열 길이 - 1과 같음
// 오른쪽 Set을 담당하는 set2에서 arr[j-1], 즉 자신과 매칭되는 길이를 찾아서 비교
