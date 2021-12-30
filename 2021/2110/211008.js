// Find Words That Can Be Formed by Characters

// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.

// Example:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// 주어진 문자로 만들수 있는 문자열의 총 길이를 반환하는 문제

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let result = 0;

  words.map((word) => {
    const splitWord = word.split(""); // 문자열 분해
    let tempChar = chars; // 임시 저장

    splitWord.map((char) => {
      if (!tempChar.includes(char)) {
        // 문자가 존재하지 않으므로 리턴
        return;
      } else {
        // 문자가 존재하므로 해당 문자 제거
        tempChar = tempChar.replace(char, "");
      }
    });

    // 남은 문자열의 길이가 word가 제거된만큼의 길이라면 결과값에 word 길이만큼 추가
    if (tempChar.length === chars.length - word.length) {
      result += word.length;
    }
  });

  return result;
};
