// Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example:
// Input: s = "hello"
// Output: "holle"

// 문자열 내 모음들의 순서를 뒤집어서 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
const target = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var reverseVowels = function (s) {
  const sArr = s.split("");
  let vowels = [];
  // 모음 수집
  for (let i = 0; i < sArr.length; i++) {
    if (target.includes(sArr[i])) {
      vowels.push(sArr[i]);
    }
  }
  // 모음 역순 배치
  for (let i = 0; i < sArr.length; i++) {
    if (target.includes(sArr[i])) {
      sArr[i] = vowels[vowels.length - 1];
      vowels.pop();
    }
  }
  return sArr.join("");
};
