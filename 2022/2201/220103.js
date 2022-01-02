// Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// Example:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// 파스칼의 삼각형에서 주어진 index 열의 배열을 반환하는 문제

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 0번째 조기 반환
  if (rowIndex === 0) return [1];
  // 1번째를 레퍼런스로
  const ref = [1, 1];
  let result;
  // 재귀를 통해 index를 카운트로 삼고, 이전 열을 인자로 받아서 현재 열의 요소를 계산
  const helper = (count, preRow) => {
    // index가 1이면 리턴 (1번이 레퍼런스이므로)
    if (count === 1) return (result = preRow);
    // 현재 열에서 기본 1을 세팅
    const curRow = [1];
    // 현재열 요소 계산
    for (let i = 0; i < preRow.length - 1; i++) {
      curRow.push(preRow[i] + preRow[i + 1]);
    }
    // 마지막 1 추가
    curRow.push(1);
    // 반환될때까지 재귀
    helper(count - 1, curRow);
  };
  helper(rowIndex, ref);
  return result;
};
