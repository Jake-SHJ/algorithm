// DI String Match

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
//  - s[i] == 'I' if perm[i] < perm[i + 1], and
//  - s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it.
// If there are multiple valid permutations perm, return any of them.

// Example:
// Input: s = "IDID"
// Output: [0,4,1,3,2]

// 주어진 문자열을 규칙에 따라 순열로 반환하는 문제

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let result = [];
  let inc = 0;
  let dec = s.length;

  for (let i = 0; i < s.length + 1; i++) {
    s[i] === "I" ? result.push(inc++) : result.push(dec--);
  }

  return result;
};

// 처음엔 문자열 순서에 따라 전체 배열을 조작하려고 했으나, 문제의 의도가 그게 아닌것 같아서
// discuss를 참조해보니 규칙에 맞춰 작은수에서 큰수로, 큰수에서 작은수로 순서대로 넣는 방법을 사용하는 것이었음
// 다만 규칙을 적용하는데 바로 이해하기에는 어려움이 있음
