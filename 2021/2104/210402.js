// Count Square Submatrices with All Ones

// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// Example:
// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation:
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.

// 주어진 배열에서 1로 이루어진 정사각형의 총 개수를 구하는 문제

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const findSquare = (mat, sqSize) => {
  let result = 0;
  let arr = [];
  for (let i = 0; i < mat.length - sqSize + 1; i++) {
    for (let j = 0; j < mat[0].length - sqSize + 1; j++) {
      let sq = 0;
      for (let k = 0; k < sqSize; k++) {
        for (let l = 0; l < sqSize; l++) {
          i + k < mat.length && j + l < mat[0].length && mat[i + k][j + l] === 1
            ? (sq += 1)
            : null;
        }
      }
      sq === sqSize * sqSize ? arr.push(sq) : null;
    }
  }
  result += arr.length;
  return result;
};

var countSquares = function (matrix) {
  const maxSquare =
    matrix.length <= matrix[0].length ? matrix.length : matrix[0].length;
  let result = 0;
  for (let i = 0; i < maxSquare; i++) {
    result += findSquare(matrix, i + 1);
  }
  return result;
};

// 배열 안에서 배열을 검증해야 하다보니 순회가 엄청나게 들어감..
// timelimit를 통과하지 못했다.

var countSquares = function (matrix) {
  let count = 0;
  let M = matrix.length,
    N = matrix[0].length;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      // 해당 요소가 1을 가지고 있을 때
      if (matrix[i][j]) {
        // 기본적으로 1을 카운트 (1개로 이루어진 정사각형)
        matrix[i][j] =
          1 +
          (i && j
            ? Math.min(matrix[i][j - 1], matrix[i - 1][j - 1], matrix[i - 1][j])
            : 0);
        // 0, 0 을 제외하고 요소 x, y에 -1을 한 값의 가장 작은값을 더함(0이 포함되어 있으면 0임, 2 사이즈의 정사각형 확인, 순회가 진행되고 각 요소에 1이 만족되면 계속 누적됨)
        // 3 * 3의 배열이 전부 1이면 다음과 같이 나옴
        // 1 1 1
        // 1 2 2
        // 1 2 3
        // 총합은 14, 모든 정사각형의 갯수와 일치
        count += matrix[i][j];
      }
    }
  }
  return count;
};
// discuss 참조, 이거 모르면 배열의 크기가 커졌을 때를 알 수가 없을듯..
