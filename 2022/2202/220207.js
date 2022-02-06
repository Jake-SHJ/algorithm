// Find the Town Judge

// In a town, there are n people labeled from 1 to n.
// There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example:
// Input: n = 2, trust = [[1,2]]
// Output: 2

// 주어진 배열에서 모두의 신뢰를 얻고, 모두를 믿지 않는 판사를 반환하는 문제

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let trustMap = new Map();

  for (let i = 0; i < trust.length; i++) {
    trustMap.set(
      trust[i][1],
      trustMap.get(trust[i][1])
        ? [...trustMap.get(trust[i][1]), trust[i][0]]
        : [trust[i][0]]
    );
  }

  const valueMap = trustMap.values();
  let values = new Set();
  for (const value of valueMap) {
    values.add(...value);
  }

  for (const [key, value] of trustMap) {
    if (!values.has(key) && value.length === n - 1) return key;
  }

  return -1;
};

// Map, Set 써가면서 풀어봤으나 쉽게 풀리지 않음.. 갈수록 easy 맞나 싶음

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const counts = new Array(N + 1).fill(0);

  for (let [i, j] of trust) {
    // 신뢰를 하는 사람, 모두에게 신뢰를 받았으나 나도 신뢰를 한다면 판사에서 탈락
    counts[i] -= 1;
    // 신뢰를 받는 사람
    counts[j] += 1;
  }

  for (let i = 1; i < counts.length; i++) {
    // 신뢰를 모두에게 받았으면
    if (N - 1 === counts[i]) {
      return i;
    }
  }

  return -1;
};
// 카운트로 쉽게 풀수 있었음..
