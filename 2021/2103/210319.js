// Find Valid Matrix Given Row and Column Sums

// You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in
// the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix.
// In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.

// Find any matrix of non-negative integers of size rowSum.length x colSum.
// length that satisfies the rowSum and colSum requirements.

// Return a 2D array representing any matrix that fulfills the requirements.
// It's guaranteed that at least one matrix that fulfills the requirements exists.

// Example:

// Input: rowSum = [3,8], colSum = [4,7]
// Output: [[3,0], [1,7]]
// Explanation:
// 0th row: 3 + 0 = 3 == rowSum[0]
// 1st row: 1 + 7 = 8 == rowSum[1]
// 0th column: 3 + 1 = 4 == colSum[0]
// 1st column: 0 + 7 = 7 == colSum[1]
// The row and column sums match, and all matrix elements are non-negative.
// Another possible matrix is: [[1,2], [3,5]]

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  let n = rowSum.length;
  let m = colSum.length;
  let res = new Array(n).fill(0).map((row) => new Array(m).fill(0));

  for (let i = 0; i < rowSum.length; i++) {
    for (let j = 0; j < colSum.length; j++) {
      res[i][j] = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= res[i][j];
      colSum[j] -= res[i][j];
    }
  }
  return res;
};

// 애초에 문제에 접근을 하지 못해 못풀었음
// 둘 중에 더 작은 수를 구해서 계속 빼나감... 생각보다 단순한 계산
