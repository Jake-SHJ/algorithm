// Buddy Strings

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example:
// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// 주어진 두 문자열이 한자리만 자리를 바꿨을 때, 서로가 같은지 여부를 반환하는 문제

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  // 길이가 1이거나 서로 길이가 다르면 false
  if (s.length === 1 || s.length !== goal.length) return false;
  // 서로 문자열이 똑같으나, 같은 문자열이 2개 이상 있는 경우 true
  const sSet = new Set(s.split(""));
  if (s === goal && s.length !== sSet.size) return true;

  let diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diff.push(i);
  }
  // 서로 다른 부분이 2개 있고, 그 두 부분을 치환했을 때 서로 같으면 true
  if (
    diff.length === 2 &&
    s[diff[0]] === goal[diff[1]] &&
    s[diff[1]] === goal[diff[0]]
  )
    return true;
  //  나머지 false
  return false;
};
