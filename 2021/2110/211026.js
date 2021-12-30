// Uncommon Words from Two Sentences

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example:
// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]

// 주어지는 두 문장에서 한번만 등장하는 단어를 반환하는 문제

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const mix = [...s1.split(" "), ...s2.split(" ")];
  const map = new Map();

  for (const word of mix) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  return Array.from(map)
    .filter((word) => word[1] === 1)
    .map((word) => word[0]);
};
// map에 몰아넣고 1개인 단어만 필터링
