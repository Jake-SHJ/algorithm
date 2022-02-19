// Number of Days Between Two Dates

// Write a program to count the number of days between two dates.
// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

// Example:
// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1

// 주어진 두 날짜 사이의 간격을 반환하는 문제

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  const d1 = Date.parse(date1);
  const d2 = Date.parse(date2);
  const diff = Math.abs(d1 - d2);
  return diff / (1000 * 60 * 60 * 24);
};
