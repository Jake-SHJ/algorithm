// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// 주어진 문자열 배열에서 가장 긴 공통의 접두사를 반환하는 문제

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 문자열이 하나면 전체가 접두사로 조기 반환
  if (strs.length === 1) return strs[0];

  // 가장 쩗은 문자열 기준
  const shortest = Math.min(...strs.map((el) => el.length));
  const arr = [];

  for (let j = 0; j < shortest; j++) {
    for (let i = 0; i < strs.length; i++) {
      // 인덱스 = 문자열 자릿수
      // 인덱스에 아무것도 없으면 문자를 넣음
      if (!arr[j]) {
        arr[j] = strs[i][j];
        continue;
      }
      // 인덱스에 문자가 있고, 그 문자가 동일하지 않으면
      // 해당 문자를 배열에서 삭제하고 나머지를 합쳐서 반환
      if (arr[j] && arr[j] !== strs[i][j]) {
        arr.splice(j);
        return arr.join("");
      }
    }
  }
  // 전부 동일해서 반환 없이 통과한 경우, 마지막에 반환
  return arr.join("");
};
