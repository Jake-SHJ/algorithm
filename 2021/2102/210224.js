// Valid Palindrome II

// Given a non-empty string s, you may delete at most one character.
// Judge whether you can make it a palindrome.

// Example:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let isPalindrome = false;
  const reversedS = s.split("").reverse().join("");
  if (s === reversedS) {
    return (isPalindrome = true);
  } else {
    for (let i = 0; i < s.length; i++) {
      let dupS = Array.from(s);
      let dupS2 = Array.from(s);
      dupS.splice(i, 1);
      dupS2.splice(i, 1);
      dupS2.reverse();
      if (JSON.stringify(dupS) === JSON.stringify(dupS2)) {
        return (isPalindrome = true);
      }
    }
  }
  return isPalindrome;
};

// time over.. 순차적으로 비교하니 s가 길어지면 시간도 길어져버렸다..

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
};

var isPalindrome = function (str, i, j) {
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
// discuss 해답... 앞뒤로 제거하면서 비교한다
