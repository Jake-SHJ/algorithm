// Longest Word in Dictionary

// Given an array of strings words representing an English Dictionary,
// return the longest word in words that can be built one character at a time by other words in words.
// If there is more than one possible answer, return the longest word with the smallest lexicographical order.
// If there is no answer, return the empty string.

// Example:
// Input: words = ["w","wo","wor","worl","world"]
// Output: "world"
// Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

// 주어진 문자열에서 단어의 1 글자부터 순차적으로 나온 단어 중 가장 긴 단어를 반환하는 문제, 길이가 같은 경우 사전적으로 가장 빠른 단어를 반환

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let result = "";

  words.sort();

  for (const word of words) {
    if (word.length > result.length) {
      if (words.includes(word.slice(0, -1))) {
        result = word;
      }
    } else if (word.length === result.length) {
      if (words.includes(word.slice(0, -1))) {
        const compareArr = [result, word].sort();
        result = compareArr[0];
      }
    }
  }

  return result;
};

// 각 word의 비교와 길이에 대한 조건을 넣었지만 글자 1개부터 순차적으로 추가된건지 확인하는 로직의 부재로 틀림

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort();
  let set = new Set();
  let res = "";

  for (let word of words) {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;
};

// discuss 참고 답안, word의 length가 1이거나 Set이 word의 마지막 문자를 뺀 문자열을 가지고 있는지 체크함으로써
// 순차적으로 나열된 문자열인지 확인...
