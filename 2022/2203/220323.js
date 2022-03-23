// Check if Binary String Has at Most One Segment of Ones

// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones.
// Otherwise, return false.

// Example:
// Input: s = "1001"
// Output: false
// Explanation: The ones do not form a contiguous segment.

// 주어진 문자열에서 1이 연속해서 나오는 경우가 1번인 경우만 true를 반환하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let withoutSegment = "";

  for (let i = 1; i < s.length; i++) {
    // 시작이 1이므로 처음으로 0을 마주한 순간에 연속하는 1의 끝 지점
    if (s[i] === "0") {
      withoutSegment = s.slice(i);
      break;
    }
  }
  // 연속하는 1을 제외한 나머지 문자열 그룹에서 1을 포함하면 false
  return !withoutSegment.includes("1");
};
// 처음엔 문제를 잘못 이해해서, 1개 이상의 연속하는 1이 있으면 true인 줄 알았음
// test 돌려보니 "1101"이 false여서 연속하는 1이 하나만 있어야 하는 경우임을 확인
