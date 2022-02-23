// Number of Equivalent Domino Pairs

// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d]
// if and only if either (a == c and b == d), or (a == d and b == c) - that is,
// one domino can be rotated to be equal to another domino.
// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length,
// and dominoes[i] is equivalent to dominoes[j].

// Example:
// Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
// Output: 1

// 주어진 배열에서 같거나 순서만 다른 도미노의 쌍의 수를 반환하는 문제

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let count = 0;

  for (let i = 0; i < dominoes.length; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      // 같은 경우
      const equal =
        dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1];
      // 순서만 다른 경우
      const exchanged =
        dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0];
      if (equal || exchanged) {
        count++;
      }
    }
  }

  return count;
};
