// Minimum Changes To Make Alternating Binary String

// You are given a string s consisting only of the characters '0' and '1'.
// In one operation, you can change any '0' to '1' or vice versa.
// The string is called alternating if no two adjacent characters are equal.
// For example, the string "010" is alternating, while the string "0100" is not.
// Return the minimum number of operations needed to make s alternating.

// Example:
// Input: s = "0100"
// Output: 1
// Explanation: If you change the last character to '1', s will be "0101", which is alternating.

// 주어진 문자열에서 서로 이웃한 문자와 같지 않도록 0과 1을 배치할 때, 가장 적게 변경하는 횟수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let flip1 = null,
    flip2 = null,
    count1 = 0,
    count2 = 0;

  for (const c of s) {
    // 0으로 시작하는 경우와 1로 시작하는 경우 2그룹을 동시에 저장하여 확인
    // 시작 지점에서 두가지의 경우를 분기
    if (flip1 === null && c === "0") {
      flip1 = "0";
      flip2 = "1";
      count2++;
      continue;
    }

    if (flip1 === null && c === "1") {
      flip1 = "1";
      flip2 = "0";
      count2++;
      continue;
    }

    // 이전 상태와 같으면 카운트 증가
    if (flip1 === c) count1++;
    if (flip2 === c) count2++;

    // 다음 상태 변경
    flip1 === "0" ? (flip1 = "1") : (flip1 = "0");
    flip2 === "0" ? (flip2 = "1") : (flip2 = "0");
  }

  return Math.min(count1, count2);
};
