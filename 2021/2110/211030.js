// Occurrences After Bigram

// Given two strings first and second, consider occurrences in some text of the form "first second third",
// where second comes immediately after first, and third comes immediately after second.
// Return an array of all the words third for each occurrence of "first second third".

// Example:
// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]

// 주어진 문자열에서 first, second 단어 뒤에 오는 단어들을 배열로 반환하는 문제

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const splitedText = text.split(" ");
  let result = [];

  for (let i = 2; i < splitedText.length; i++) {
    if (splitedText[i - 2] === first && splitedText[i - 1] === second) {
      result.push(splitedText[i]);
    }
  }

  return result;
};
