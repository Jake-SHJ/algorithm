// Count of Matches in Tournament

// You are given an integer n, the number of teams in a tournament that has strange rules:
// If the current number of teams is even, each team gets paired with another team.
// A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired.
// A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

// Example:
// Input: n = 7
// Output: 6
// Explanation: Details of the tournament:
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.

// 주어진 규칙대로 진행되는 토너먼트에서 총 대결 수를 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n, matches = 0) {
  if (n === 1) return matches;

  if (n % 2 === 0) {
    return numberOfMatches(n / 2, matches + n / 2);
  } else {
    return numberOfMatches((n - 1) / 2, matches + (n - 1) / 2 + 1);
  }
};

// discuss에는 return n - 1이 많이 보이던데
// 문제의 의도는 그건 아닌것 같음
// 재귀를 통해 문제를 해결
