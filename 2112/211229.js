// Reformat The String

// You are given an alphanumeric string s.
// (Alphanumeric string is a string consisting of lowercase English letters and digits).
// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit.
// That is, no two adjacent characters have the same type.
// Return the reformatted string or return an empty string if it is impossible to reformat the string.

// Example:
// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

// 주어진 문자열에서 숫자와 문자를 교차에서 리포맷 할 수 있는 경우만 리포맷하여 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
const NUMBER = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var reformat = function (s) {
  let num = [];
  let str = [];
  // 숫자 문자 분할
  for (const c of s) {
    NUMBER.includes(c) ? num.push(Number(c)) : str.push(c);
  }
  // "j" 가 리포맷 된다고 해서 어이가 없었음..리포맷이 아니잖아
  if (
    (!num.length && str.length > 1) ||
    (!str.length && num.length > 1) ||
    // 개수 차이가 2개 이상나면 교차할 수 없음
    Math.abs(num.length - str.length) > 1
  )
    return "";

  let result = "";
  // 조금 더 긴 쪽이 먼저 결과값에 추가
  if (num.length >= str.length) {
    for (let i = 0; i < num.length; i++) {
      num[i] === 0 || num[i] ? (result += String(num[i])) : null;
      str[i] ? (result += str[i]) : null;
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      str[i] ? (result += str[i]) : null;
      num[i] === 0 || num[i] ? (result += String(num[i])) : null;
    }
  }
  return result;
};
// 문제 난이도가 높은 건 아닌데 예외처리가 어렵지 않았나...
