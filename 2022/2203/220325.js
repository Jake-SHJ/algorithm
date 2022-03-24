// Maximum Repeating Substring

// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence.
// The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence.
// If word is not a substring of sequence, word's maximum k-repeating value is 0.
// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

// Example:
// Input: sequence = "ababc", word = "ab"
// Output: 2
// Explanation: "abab" is a substring in "ababc".

// 주어진 sequence에서 연속적으로 반복되는 word의 최대값을 반환하는 문제

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let result = 0;

  while (sequence.includes(word.repeat(result + 1))) {
    result += 1;
  }

  return result;
};
// discuss 참조, string에 repeat라는 메서드가 있는지 몰랐음..
// 처음엔 "연속적" 반복을 안보고 일단 sequence내에 있는 모든 word 개수를 추출했음.. 문제 잘 읽어보기..
