// Smallest String With A Given Numeric Value

// The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet,
// so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.
// The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values.
// For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.
// You are given two integers n and k.
// Return the lexicographically smallest string with length equal to n and numeric value equal to k.
// Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order,
// that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

// Example:
// Input: n = 3, k = 27
// Output: "aay"
// Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.

// 알파벳을 1-index로 숫자를 매겼을 때, n개의 갯수만큼 k의 값을 채울 수 있는 최소한의 문자열을 사전순서대로 정렬하여 반환하는 문제

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let valueLeft = k - n; // a를 배제 시켜놓고 시작
  let result = "";

  for (let i = n - 1; i >= 0; i--) {
    if (valueLeft < 26) {
      // z를 넣을 사이즈가 아니면
      return "a".repeat(i) + String.fromCharCode(valueLeft + 97) + result; // 남은 i만큼 a 반복 + 남은수만큼의 문자열 반환
    } else {
      result = "z" + result; // z를 추가
      valueLeft -= 25; // z의 사이즈 만큼 제거
    }
  }
};
// 결론적으로 순회하는 조건을 잘못 잡아서 방향을 잃고 문제 해결에 실패
// 위의 답안은 discuss 참조
