// Check If a Word Occurs As a Prefix of Any Word in a Sentence

// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word.
// If searchWord is a prefix of more than one word, return the index of the first word (minimum index).
// If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.

// Example:
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

// 주어진 sentence에서 searchWord를 prefix로 하는 단어의 1-indexed로 인덱스를 반환하는 문제

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let result = -1;
  const splitedSentence = sentence.split(" ");

  for (let i = 0; i < splitedSentence.length; i++) {
    if (splitedSentence[i].slice(0, searchWord.length) === searchWord) {
      result = i + 1;
      break;
    } else {
      continue;
    }
  }

  return result;
};
