// Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// 주어진 수만큼의 높이의 파스칼의 삼각형을 반환하는 문제

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    // 2층까진 강제 주입
    if (i === 0) {
      result.push([1]);
      continue;
    }

    if (i === 1) {
      result.push([1, 1]);
      continue;
    }

    // 3층부터 이전 요소가 2개 이상이 되므로 첫 1은 가지고 있는 상태로 계산 시작
    let temp = [1];
    for (let j = 0; j < result[i - 1].length - 1; j++) {
      temp.push(result[i - 1][j] + result[i - 1][j + 1]);
    }
    // 마지막 1 추가
    temp.push(1);
    result.push(temp);
  }

  return result;
};
