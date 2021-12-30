// Reverse Only Letters

// Given a string s, reverse the string according to the following rules:
//  - All the characters that are not English letters remain in the same position.
//  - All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example:
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// 주어진 문자열에서 특수문자를 제외한 문자만 뒤집어서 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let reverseString = [];
  let notString = [];

  for (let i = 0; i < s.length; i++) {
    const ascii = s[i].charCodeAt();
    // 문자열이면 뒤집어서 수집
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      reverseString.unshift(s[i]);
      // 아니면 따로 위치까지 수집
    } else {
      notString.push([s[i], i]);
    }
  }
  // 특문 없으면 조기 반환
  if (notString.length === 0) return reverseString.join("");
  // 특문 위치 지정하여 추가
  for (const special of notString) {
    reverseString.splice(special[1], 0, special[0]);
  }

  return reverseString.join("");
};
