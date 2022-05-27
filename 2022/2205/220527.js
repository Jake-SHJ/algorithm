// Find Players With Zero or One Losses

// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.
// Note:
// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.

// Example:
// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

// 주어진 배열에서 한번도 진적이 없거나 한번만 진 경우를 배열로 반환하는 문제

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let res = [[], []];
  const winners = new Map();
  const losers = new Map();
  // 승패 카운트
  for (const [win, los] of matches) {
    winners.set(win, (winners.get(win) || 0) + 1);
    losers.set(los, (losers.get(los) || 0) + 1);
  }
  // 무패자 선정
  for (const [k, v] of winners) {
    if (!losers.has(k)) res[0].push(k);
  }
  // 단일 패자 선정
  for (const [k, v] of losers) {
    if (v === 1) res[1].push(k);
  }
  // 오름차순 정렬
  res[0].sort((a, b) => a - b);
  res[1].sort((a, b) => a - b);

  return res;
};
