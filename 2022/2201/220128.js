// Verifying an Alien Dictionary

// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order.
// The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet,
// return true if and only if the given words are sorted lexicographically in this alien language.

// Example:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// 주어진 order대로 배열이 정렬되어있는지 유무를 반환하는 문제

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    // 현재 단어와 다음 단어 저장
    const word = words[i];
    const next = words[i + 1];
    for (let j = 0; j < word.length; j++) {
      // 현재 단어와 다음 단어의 문자마다 인덱스 체크
      const wordIdx = order.indexOf(word[j]);
      const nextIdx = order.indexOf(next[j]);
      // 현재 문자가 더 작으면 단어 전체가 통과
      if (wordIdx < nextIdx) break;
      // 하나라도 크면 false
      if (wordIdx > nextIdx) return false;
    }
  }
  // 다 통과 됐으면 true
  return true;
};
