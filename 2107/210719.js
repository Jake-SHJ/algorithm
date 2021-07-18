// Check if the Sentence Is Pangram

// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// 주어진 문자열이 모든 알파벳을 하나 이상 사용하였는지를 판별하는 문제

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let result = true;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabets.length; i++) {
    if (sentence.includes(alphabets[i])) {
      continue;
    } else {
      result = false;
      break;
    }
  }

  return result;
};
// 문자열을 순회하려고 고민하다가, 역으로 알파벳을 순회하는게 더 빠르지 않을까라는 생각
// 알파벳을 순회하다가 없으면 바로 false를 반환, 문자열 자체를 순회하는 것보다 더 쉽게 문제가 해결
