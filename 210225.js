// Number of Segments in a String

// You are given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Example:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  if (s.length === 0) return 0;
  const splitedS = s.split(" ");
  const filteredS = splitedS.filter((s) => s !== "");
  return filteredS.length;
};
// 빈 스트링에 대한 예외처리
// 공백이 스트링에 연속으로 들어간 경우에 대한 필터링 추가

// discuss 참고 같은 로직의 한줄 처리
var countSegments = function (s) {
  return s.split(" ").filter((item) => item !== "").length;
};
// 메모리 소모는 비슷, 속도는 빠르다.
