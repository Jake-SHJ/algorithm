// Sorting the Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
//  - For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// Example:
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

// 주어진 문자열에서 각 단어의 끝에 주어진 순서대로 문자열을 정렬하여 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const sortedStr = [];
  // 단어 분리
  const splitedStr = s.split(" ");

  for (const str of splitedStr) {
    // 순서 확인
    const idx = str[str.length - 1] - 1;
    // 순서를 제외한 단어 배치
    sortedStr[idx] = str
      .split("")
      .slice(0, str.length - 1)
      .join("");
  }

  // 배치된 배열 문자열 전환
  return sortedStr.join(" ");
};
