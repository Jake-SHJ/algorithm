// Positions of Large Groups

// In a string s of lowercase letters, these letters form consecutive groups of the same character.
// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group.
// In the above example, "xxxx" has the interval [3,6].
// A group is considered large if it has 3 or more characters.
// Return the intervals of every large group sorted in increasing order by start index.

// Example:
// Input: s = "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the only large group with start index 3 and end index 6.

// 주어진 문자열에서 3개 이상의 연속된 문자열의 인덱스 시작과 끝을 반환하는 문제

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const group = [];
  let tmp = [];

  for (let i = 0; i < s.length; i++) {
    if (tmp[0] !== s[i]) {
      // 이전의 문자열과 다르다면 (연속되지 않으면서 같은 문자열에 의해 map을 사용할수 없는 상태)
      i !== 0 ? group.push(tmp) : null; // 첫번째 문자열이 아닌 경우, 기존에 저장된 tmp를 group으로 이동
      tmp = [s[i], 1, i]; // 새로 추가된 문자, 갯수, 시작 인덱스를 저장
    } else {
      tmp[1] += 1; // 이전 문자열과 같은 경우, 갯수를 증가
    }
    i === s.length - 1 ? group.push(tmp) : null; // 마지막 문자열이라면 group으로 이동
  }

  return group
    .filter((arr) => {
      return arr[1] >= 3; // 3개 이상의 연속된 숫자를 필터
    })
    .map((arr) => {
      return (arr = [arr[2], arr[2] + arr[1] - 1]); // 시작 인덱스와 시작 인덱스 + 갯수 - 1 로 마지막 인덱스 쌍을 반환
    });
};

// 연속한다는 조건 때문에 난이도가 조금 상승한 문제
// 무조건 연속하는 문자열만 나온다면 Map으로 쉽게 풀수 있었음
