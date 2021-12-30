// Sort Characters By Frequency

// Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

// Example:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// 주어진 문자열을 빈도수가 많은 것이 우선, 그 다음 사전식 순서를 따르도록 정렬하여 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  const result = [];

  s = s.split("").sort().join(""); // 사전식 순서로 먼저 정렬

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1); // map에 문자와 빈도수를 저장
  }

  Array.from(map) // map을 array로 변환
    .sort((a, b) => {
      return b[1] - a[1]; // 빈도수에 의한 정렬
    })
    .map((kv) => {
      for (let i = 0; i < kv[1]; i++) {
        result.push(kv[0]); // 빈도수만큼 결과값에 push
      }
    });

  return result.join(""); // array이므로 join하여 string으로 반환
};

// 많은 순회 함수에도 불구하고 통과하였음
// 사전식 순서 정렬은 다른 순회에 녹일 수 있을 것 같은데 생각이 안남..
