// Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example:
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// 주어진 문자열로 만들 수 있는 회문의 최대 길이를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1; // 1개는 조기 반환
  const map = new Map();
  let odd = 0,
    even = 0;
  // 문자별로 개수를 저장
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  // Map 순회
  for (const [key, value] of map) {
    // 짝수면 전부 even에 더해줌 (짝수개의 문자는 전부 회문의 재료가 될 수 있음)
    if (value % 2 === 0) {
      even += value;
      continue;
    }
    // 홀수개의 문자는 하나만 지정이 가능하므로 가장 큰 홀수를 찾는 것이 목표
    // 나머지 홀수개의 문자는 짝수로 전환(하나를 빼서)하여 even에 더해줌
    if (odd === 0) {
      odd = value;
      continue;
    }
    if (odd < value) {
      // 여기서 무조건 하나를 빼서 even에 넣으므로 odd가 0인 경우(첫 홀수 지정)는 따로 분리해서 고려
      // 0이면 even에 -1이 더해짐
      even += odd - 1;
      odd = value;
    } else {
      even += value - 1;
    }
  }
  return odd + even;
};
