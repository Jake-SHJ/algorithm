// Minimum Number of Steps to Make Two Strings Anagram II

// You are given two strings s and t. In one step, you can append any character to either s or t.
// Return the minimum number of steps to make s and t anagrams of each other.
// An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Example:
// Input: s = "leetcode", t = "coats"
// Output: 7
// Explanation: 
// - In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
// - In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
// "leetcodeas" and "coatsleede" are now anagrams of each other.
// We used a total of 2 + 5 = 7 steps.
// It can be shown that there is no way to make them anagrams of each other with less than 7 steps.

// 주어진 두 문자열에서 애너그램이 되는 문자를 제외한 나머지 문자를 지우는 총 스텝을 반환하는 문제

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const map = new Map(), sLen = s.length, tLen = t.length;
  let anagramLen = 0;
  // 처음엔 한번에 처리하고 싶어서 includes로 찾고, replace로 지워가면서 체크했음
  // 하지만 결국 다 순회라 TimeLimit에 걸림
  for (let i = 0; i < sLen; i++) {
      if (t.includes(s[i])) {
          map.set(s[i], (map.get(s[i]) || 0) + 1);
      }

      t = t.replace(s[i], "");
  }

  for (const [k, v] of map) {
      anagramLen += v;
  }

  return sLen + tLen - (2 * anagramLen);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const map = new Map();
    let both = 0;
    
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    
    for (const c of t) {
        if (!map.get(c)) continue;
        map.set(c, map.get(c) - 1);
        ++both;
    }
    
    return s.length + t.length - (both * 2);
};
// discuss를 참고한 방법, 중복 순회보다 따로 2개를 다 돌려서 확인하는게 더 빠름
