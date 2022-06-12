// Combination Sum

// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// 주어진 target을 만드는데 필요한 candidates의 경우의 수를 반환하는 문제

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  const backtracking = (remain, path, start) => {
    // 조건 이탈
    if (remain < 0) return;
    // 조건 만족
    if (remain === 0) return res.push([...path]);
    // 순회
    for (let i = start; i < candidates.length; i++) {
      backtracking(remain - candidates[i], [...path, candidates[i]], i);
    }
  };
  backtracking(target, [], 0);
  return res;
};
// discuss 및 220609 일자 알고리즘 참고
// 백트래킹을 사용하는 것은 비슷하나 9일자는 숫자 중복 제한 및 갯수 제한이 있었고
// 오늘자는 candidates 내에서 가능한 모든 경우의 수라서 순회로 해결해야했음
