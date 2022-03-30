// Number of Different Integers in a String

// You are given a string word that consists of digits and lowercase English letters.
// You will replace every non-digit character with a space.
// For example, "a123bc34d8ef34" will become " 123  34 8  34".
// Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".
// Return the number of different integers after performing the replacement operations on word.
// Two integers are considered different if their decimal representations without any leading zeros are different.

// Example:
// Input: word = "a123bc34d8ef34"
// Output: 3
// Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.

// 주어진 문자열에서 각각 다른 정수의 개수를 반환하는 문제

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const set = new Set();
  let temp = "";

  const lowLetter = /[a-z]/;
  for (let i = 0; i < word.length; i++) {
    // 정수가 아니면
    if (lowLetter.test(word[i])) {
      // 임시 변수의 길이가 0이 아니면 set에 넣음
      // 하지만 임시 변수 첫번째 수가 0이면 숫자로 전환하여 0을 떼어내고, 다시 문자화하여 넣음
      temp.length === 0
        ? null
        : set.add(temp[0] === "0" ? String(Number(temp)) : temp);
      temp = "";
      continue;
    } else {
      temp += word[i];
    }
    // 문자열의 마지막일때
    if (i === word.length - 1) {
      temp.length === 0
        ? null
        : set.add(temp[0] === "0" ? String(Number(temp)) : temp);
    }
  }
  // Set의 크기 반환
  return set.size;
};
