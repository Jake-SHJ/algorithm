// Detect Capital

// We define the usage of capitals in a word to be right when one of the following cases holds:
// - All letters in this word are capitals, like "USA".
// - All letters in this word are not capitals, like "leetcode".
// - Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example:
// Input: word = "FlaG"
// Output: false

// 주어진 문자열이 올바른 대문자 사용의 규칙에 맞게 주어졌는지 판단하여 반환하는 문제

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let cap = 0;
  let notCap = 0;

  const capList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // 대문자, 소문자 분류작업
  for (const char of word) {
    capList.includes(char) ? (cap += 1) : (notCap += 1);
  }

  // 전부 소문자, 전부 대문자, 첫글자만 대문자에 대하여 true 반환
  if (cap === 0 || notCap === 0 || (cap === 1 && capList.includes(word[0])))
    return true;

  // 나머지는 전부 false 반환
  return false;
};
