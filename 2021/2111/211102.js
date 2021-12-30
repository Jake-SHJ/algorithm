// Calculate Money in Leetcode Bank

// Hercy wants to save money for his first car.
// He puts money in the Leetcode bank every day.
// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before.
// On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

// Example:
// Input: n = 4
// Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

// 주어진 n일에 규칙에 따라 누적된 금액을 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let mon = 1; // 월요일 기준 금액(주당 1씩 증가)
  let acc = 0; // 누산 금액 (하루에 1씩 증가)
  let result = 0;

  for (let i = 0; i < n; i++) {
    // 1주가 지나면
    if (acc === 7) {
      mon += 1; // 월요일 기준 금액 +1
      acc = 0; // 누산 금액 초기화
    }
    result += mon + acc; // 기준 금액 + 누산 금액 추가
    acc++; // 누산 금액 +1
  }

  return result;
};
