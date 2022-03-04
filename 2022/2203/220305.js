// Rearrange Spaces Between Words

// You are given a string text of words that are placed among some number of spaces.
// Each word consists of one or more lowercase English letters and are separated by at least one space.
// It's guaranteed that text contains at least one word.
// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized.
// If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.
// Return the string after rearranging the spaces.

// Example:
// Input: text = "  this   is  a sentence "
// Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

// 주어진 문자열의 공백 문자를 재배열하여 반환하는 문제

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  // 문자열 길이가 1이면 그대로 조기 반환
  if (text.length === 1) return text;
  let spaceCount = 0;
  // 총 공백 문자 갯수 카운트
  for (let i = 0; i < text.length; i++) {
    text[i] === " " ? spaceCount++ : null;
  }
  // 문자열 내 단어만 배열로 저장
  const words = text.split(" ").filter((el) => el !== "");
  // 단어가 하나면 단어 뒤에 공백 문자 붙여서 조기 반환
  if (words.length === 1) {
    let remain = Array(spaceCount).fill(" ").join("");
    return (words[0] += remain);
  }
  // 공백 문자 분배
  const divideSpace = Array(Math.floor(spaceCount / (words.length - 1)))
    .fill(" ")
    .join("");
  // 남는 공백 문자 저장
  const remain = Array(spaceCount % (words.length - 1))
    .fill(" ")
    .join("");
  // 단어 순회 돌면서 뒤에 분배한 공백 문자를 붙이고, 마지막 단어 뒤에 남는 공백 문자 처리
  return words
    .map((el, idx) => {
      return idx === words.length - 1 ? (el += remain) : (el += divideSpace);
    })
    .join("");
};
// 예외처리 할게 많아서 틀리는 경우가 많았던 문제
// 문자열 길이 1, 단어가 하나여서 공백 문자 분배 시 0으로 나누는 경우가 발생하여 문제가 되었음
