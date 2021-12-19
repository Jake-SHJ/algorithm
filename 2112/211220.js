// Maximum Population Year

// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.
// The population of some year x is the number of people alive during that year.
// The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1].
// Note that the person is not counted in the year that they die.
// Return the earliest year with the maximum population.

// Example:
// Input: logs = [[1993,1999],[2000,2010]]
// Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

// 주어진 출생과 사망을 나타낸 2차원 배열에서 가장 인구가 많은 년도를 반환하는 문제

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const map = new Map();

  for (const log of logs) {
    const [birth, death] = log;
    for (let i = birth; i < death; i++) {
      map.set(i, (map.get(i) || 0) + 1);
    }
  }

  let maxPopulation = 0;
  let maxPopulationYear = 0;
  for (let year = 1950; year < 2050; year++) {
    if (map.get(year) > maxPopulation) {
      maxPopulation = map.get(year);
      maxPopulationYear = year;
    }
  }

  return maxPopulationYear;
};
// discuss 참조, 대부분 주어진 시작지점 1950년부터 마지막 2050년까지를 전체 순회하는 방식을 선택
