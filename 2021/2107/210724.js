// Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

// Example:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// 주어진 words 중 allowed 단어에 적합한 단어의 갯수를 반환하는 문제

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let result = 0;

  for (const word of words) {
    let allowedWord = true;
    for (const char of word) {
      if (!allowed.includes(char)) {
        allowedWord = false;
      }
      continue;
    }
    if (allowedWord) result += 1;
  }

  return result;
};

// allowed에서 적합한걸 찾는 것보다 word에서 부적합한걸 찾는게 쉬움
// 각 단어의 순회 + 단어의 문자별 순회로 적합 여부 판단
