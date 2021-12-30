//  Merge Strings Alternately

// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Example:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// 주어진 두 문자열을 한문자씩 번갈아 이루어진 다른 문자열로 반환하는 문제

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  const length = Math.max(word1.length, word2.length);

  for (let i = 0; i < length; i++) {
    result += word1[i] || "";
    result += word2[i] || "";
  }

  return result;
};

// if (word1[i]) result += word1[i] 보다 result += word1[i] || ""가 더 빠름
// word1.length >= word2.length ? word1.length : word2.length 보다 Math.max(word1.length, word2.length)가 빠름
