// Day of the Year

// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

// Example:
// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.

// 주어진 날짜가 그 해 몇번째 일인지 반환하는 문제

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const [year, month, day] = date.split("-").map(Number);
  // map(Number)는 모든 arg를 Number 타입으로 변환함

  if (isLeapYear(year)) DAYS_IN_MONTH[2] = 29;

  let daysBeforeMonth = 0;

  for (let m = 1; m < month; m++) daysBeforeMonth += DAYS_IN_MONTH[m];

  return daysBeforeMonth + day;
};

const isLeapYear = (y) => y % 400 == 0 || (y % 4 == 0 && y % 100 != 0);
// 윤년 계산

// Date 내장 객체로 뭔가 할 수 있을꺼라 생각했지만.. moment가 왜 자주 사용되었는지 알 수 있음
// discuss를 참조, 조금 단순하게 생각했으면 풀 수 있었을듯..
