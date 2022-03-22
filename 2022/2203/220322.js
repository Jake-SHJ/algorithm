// Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 주어진 문자열에서 문자만 판단하였을 때 회문인지의 여부를 반환하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 특문, 공백 제거
  const regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]/g;
  // 소문자 처리
  let pureStr = s.replaceAll(regex, "").toLowerCase();

  const len = pureStr.length;
  // 남은게 없으면 조기 반환
  if (len === 0) return true;

  // 절반 기준 앞뒤로 체크
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (pureStr[i] !== pureStr[len - 1 - i]) return false;
  }

  return true;
};
