// License Key Formatting

// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes.
// The string is separated into n + 1 groups by n dashes. You are also given an integer k.
// We want to reformat the string s such that each group contains exactly k characters,
// except for the first group, which could be shorter than k but still must contain at least one character.
// Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
// Return the reformatted license key.

// Example:
// Input: s = "5F3Z-2e-9-w", k = 4
// Output: "5F3Z-2E9W"
// Explanation: The string s has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

// 주어진 문자열을 대문자로 이루어져있고, 첫번째 그룹을 제외한 문자열의 수가 k인 문자열로 포맷팅하여 반환하는 문제

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  // dash 제거, 대문자화
  const dashless = s.replaceAll("-", "").toUpperCase();
  // 첫번째 그룹 개수 추출
  const firstGroup = dashless.length % k;
  let result = [];
  // 첫번째 그룹 먼저 result에 push
  if (firstGroup !== 0) result.push(dashless.substring(0, firstGroup));
  // k만큼 나머지 문자열 분할하여 push
  for (let i = firstGroup; i < dashless.length; i += k) {
    result.push(dashless.substring(i, i + k));
  }
  // dash로 join하여 반환
  return result.join("-");
};
