// Letter Case Permutation

// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. You can return the output in any order.

// Example:
// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

// 주어진 문자열의 모든 대소문자의 경우의 수를 반환하는 문제

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const result = [S];
  if (!Number.isNaN(Number(S))) return result;

  const changeCase = (str, idx) => {
    if (idx === str.length) return;
    if (!Number.isNaN(Number(str[idx]))) return changeCase(str, idx + 1);

    const changedStr = str
      .split("")
      .map((char, charIdx) => {
        return charIdx === idx ? (char = char.toUpperCase()) : char;
      })
      .join("");

    if (!result.includes(changedStr)) result.push(changedStr);
    changeCase(changedStr, idx + 1);
  };

  for (let i = 0; i < S.length; i++) {
    changeCase(S, i);
  }

  return result;
};

// 첫 시도, lowerCase에 대한 처리가 없어 "A"로 들어오면 "a"가 반환되지 않음

var letterCasePermutation = function (S) {
  const result = [S];
  if (!Number.isNaN(Number(S))) return result;

  const changeCase = (str, idx) => {
    if (idx === str.length) return;
    if (!Number.isNaN(Number(str[idx]))) return changeCase(str, idx + 1);

    const changedStr = str
      .split("")
      .map((char, charIdx) => {
        return charIdx === idx
          ? char === char.toLowerCase()
            ? (char = char.toUpperCase())
            : char.toLowerCase()
          : char;
      })
      .join("");

    if (!result.includes(changedStr)) result.push(changedStr);
    changeCase(changedStr, idx + 1);
  };

  for (let i = 0; i < S.length; i++) {
    changeCase(S, i);
  }

  return result;
};
// 중간에 lowerCase에 대한 처리를 추가, 하지만 대소문자가 번갈아 들어오는 경우에 대해서 처리가 어려움

var letterCasePermutation = function (S) {
  const result = [S.toLowerCase()];
  if (!Number.isNaN(Number(S))) return result;

  const changeCase = (str, idx) => {
    if (idx === str.length) return;
    if (!Number.isNaN(Number(str[idx]))) return changeCase(str, idx + 1);

    const changedStr = str
      .split("")
      .map((char, charIdx) => {
        return charIdx === idx ? (char = char.toUpperCase()) : char;
      })
      .join("");

    if (!result.includes(changedStr)) result.push(changedStr);
    changeCase(changedStr, idx + 1);
  };

  for (let i = 0; i < S.length; i++) {
    changeCase(S.toLowerCase(), i);
  }

  return result;
};
// 세번째 시도, 아예 시작부터 전체를 lowerCase로 전환 후, 로직 시작. 하지만 이 경우에도 대소문자를 번갈아서 나타낼순 없음

var letterCasePermutation = function (S) {
  const result = [S.toLowerCase()];
  if (!Number.isNaN(Number(S))) return result;

  const changeCase = (str, idx) => {
    if (idx === str.length) return;
    if (!Number.isNaN(Number(str[idx]))) return changeCase(str, idx + 1);

    const changedStr = str
      .split("")
      .map((char, charIdx) => {
        return charIdx === idx ? (char = char.toUpperCase()) : char;
      })
      .join("");

    if (!result.includes(changedStr)) result.push(changedStr);
    changeCase(changedStr, idx + 1);
    changeCase(str, idx + 1);
  };

  for (let i = 0; i < S.length; i++) {
    changeCase(S.toLowerCase(), i);
  }

  return result;
};
// 일단 통과는 한 경우. 재귀시 변경된 문자열 재귀 말고도 idx를 한번 건너뛴 호출문을 포함시킴

var letterCasePermutation = function (S) {
  S = S.toLowerCase();
  let len = S.length,
    ans = [];
  const dfs = (i, res = "") => {
    if (i < len) {
      dfs(i + 1, res + S[i]); // 건너뛰는 경우
      if (S[i] >= "a") dfs(i + 1, res + S[i].toUpperCase()); // 일반적 순회
    } else ans.push(res); // 나온 결과 push
  };
  dfs(0);
  return ans;
};
// discuss 참고 dfs로 푼 방식
