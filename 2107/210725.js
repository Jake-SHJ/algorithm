// To Lower Case

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example:
// Input: s = "Hello"
// Output: "hello"

// 대문자를 소문자로 변환하여 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s
    .split("")
    .map((char) => {
      return char >= "A" && char <= "Z"
        ? (char = String.fromCharCode(char.charCodeAt() + 32))
        : char;
    })
    .join("");
};

// 배열로 전환, map으로 순환, 다시 문자열 전환하는 방식으로 해결
