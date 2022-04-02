// Excel Sheet Column Title

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example:
// Input: columnNumber = 1
// Output: "A"

// 주어진 숫자를 엑셀 시트 컬럼 표현 방식의 문자열로 반환하는 문제

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  return columnNumber === 0
    ? ""
    : convertToTitle(Math.floor(--columnNumber / 26)) +
        String.fromCharCode("A".charCodeAt() + (columnNumber % 26));
};
// discuss 참조, 재귀를 이용해서 문자열을 붙여나가는 방식
