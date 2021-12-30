// Thousand Separator

// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

// Example:
// Input: n = 123456789
// Output: "123.456.789"

// 천단위에 점을 찍어서 문자열로 반환하는 문제

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  return n
    .toString()
    .split("")
    .reverse()
    .reduce((acc, cur) => (acc.length % 4 === 3 ? cur + "." + acc : cur + acc));
};

// 실무였으면 화폐 단위 계산이었을 것으므로, toLocaleString()이나 정규식 패턴을 검색해서 사용했을 것임.
