// Partition Labels

// A string S of lowercase English letters is given.
// We want to partition this string into as many parts as possible so that each letter appears in at most one part,
// and return a list of integers representing the size of these parts.

// Example:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const partial = [];
  let partialIdx = 0;

  S.split("").map((string, idx, arr) => {
    if (
      !partial[partialIdx] ||
      arr.slice(idx).some((str) => partial[partialIdx].includes(str))
    ) {
      partial[partialIdx]
        ? (partial[partialIdx] = partial[partialIdx] + string)
        : (partial[partialIdx] = string);
    } else {
      partialIdx += 1;
      partial[partialIdx] = string;
    }
  });

  return partial.map((str) => {
    return str.length;
  });
};

// 문자열을 나눌 수 있는 만큼 나누는 문제
// 문자열을 다 쪼개서 배열에 밀어넣었음, 이미 들어간 배열 요소가 지금 넣을 문자열 이후에도 존재하면 밀어넣는 방식으로 진행
// 아무래도 조건문, 반복문의 다수로 속도, 메모리는 형편없었지만 문제를 풀어낼 수 있어서 다행
