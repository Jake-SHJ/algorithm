// String Matching in an Array

// Given an array of string words.
// Return all strings in words which is substring of another word in any order.
// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Example:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// 주어진 문자열 배열에서 다른 문자열의 substring인 문자열을 배열로 반환하는 문제

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let result = [];
  for (const word of words) {
    words.map((compWord) => {
      // 이미 결과 값에 있으면 패스
      if (result.includes(word)) return;
      // 서로 같지 않지만 포함하는 경우 결과 값에 푸시
      if (word !== compWord && compWord.includes(word)) {
        result.push(word);
      }
    });
  }
  return result;
};
