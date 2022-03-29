// Implement strStr()

// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// 주어진 문자열에서 needle이 포함된 첫번째 인덱스를 반환하는 문제

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // needle이 빈문자열이면 조기 반환
  if (needle.length === 0) return 0;

  const sameStartAndEnd = [];
  // 문자열과 needle의 시작과 끝 문자가 같은 경우 인덱스를 저장
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack[i + needle.length - 1] === needle[needle.length - 1]
    ) {
      if (needle.length === 1) return i;
      sameStartAndEnd.push(i);
    }
  }
  // 저장된 인덱스 중, 전제 문자열이 동일한 가장 작은 인덱스 반환
  for (let i = 0; i < sameStartAndEnd.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[sameStartAndEnd[i] + j] !== needle[j]) break;

      if (j === needle.length - 1) return sameStartAndEnd[i];
    }
  }
  //없으면 -1
  return -1;
};
