// Truncate Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each of the words consists of only uppercase and lowercase English letters (no punctuation).
// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​.
// You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Example:
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

// 주어진 문장을 k만큼의 단어까지만 잘라서 반환하는 문제

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};
// 간단하게 내장 함수로 해결하는 방법, 순회 / 분해 / 다시 순회를 거치면서 저장되는 데이터가 좀 많은 편

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && ++count === k) {
      return s.slice(0, i);
    }
  }

  return s;
};
// discuss 참고
// 한번의 순회와 count 값만 저장하므로 속도와 메모리 측면에서 더 나은 성능을 보임
