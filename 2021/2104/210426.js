// Custom Sort String

// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
// S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted.
// More specifically, if x occurs before y in S, then x should occur before y in the returned string.
// Return any permutation of T (as a string) that satisfies this property.

// Example:
// Input:
// S = "cba"
// T = "abcd"
// Output: "cbad"
// Explanation:
// "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.

// 주어진 sort 방식대로 문자열을 sort 하여 반환, 방식에 포함되지 않은 문자열은 어디에 위치하여도 문제 없음

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  const target = S.split("").sort().join("");
  return T.replace(target, S);
};
// 첫시도, 예시가 단순히 이미 정렬되어 있길래 타겟이 정렬된 문자열만 존재하는 줄 알았음.
// 하지만 조건에 그런 말이 없었음 (조건을 잘 고려할 것)

var customSortString = function (S, T) {
  let target = "";
  let rest = "";

  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < T.length; j++) {
      S[i] === T[j]
        ? (target += T[j])
        : !S.includes(T[j])
        ? (rest += T[j])
        : null;
    }
  }

  return target + rest;
};

// target과 rest를 찾으려는 시도, 하지만 순회중에 rest가 중복되어 나타나서 제대로 된 답을 얻지 못함
// S = "cba", T = "abcd" 일때 output = "cbaddd", S를 3번 순회하기 때문

var customSortString = function (S, T) {
  let target = "";
  let rest = "";

  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < T.length; j++) {
      S[i] === T[j] ? (target += T[j]) : null;
    }
  }

  for (let i = 0; i < T.length; i++) {
    !S.includes(T[i]) ? (rest += T[i]) : null;
  }

  return target + rest;
};

// 최종답안, rest는 별개로 구하는 것이 더 정확하고 빠르게 구할 수 있다고 판단
