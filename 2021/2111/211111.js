// Count Binary Substrings

// Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's,
// and all the 0's and all the 1's in these substrings are grouped consecutively.
// Substrings that occur multiple times are counted the number of times they occur.

// Example:
// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

// 주어진 이진 문자열에서 나올 수 있는 substring(0과 1의 갯수가 같으면 substring)의 갯수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let result = 0;
  let prev = 0;
  let cur = 0;
  let char = null;

  for (let i = 0; i <= s.length; i++) {
    // 이전과 다른 숫자가 등장하면
    if (s[i] !== char) {
      // prev와 cur중 작은 수를 총합에 추가
      result += Math.min(prev, cur);
      // 현재의 cur 값이 prev로 옮겨가고
      prev = cur;
      // cur는 1로 초기화
      cur = 1;
      // 기준이 되는 char는 현재 값으로 변경
      char = s[i];
    } else {
      // 아니면 cur + 1
      cur++;
    }
  }

  return result;
};
