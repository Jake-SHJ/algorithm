// Matrix Block Sum

// Given a m * n matrix mat and an integer K, return a matrix answer where each
// answer[i][j] is the sum of all elements mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K,
// and (r, c) is a valid position in the matrix.

// Example:
// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
// Output: [[12,21,16],[27,45,33],[24,39,28]]

// 주어진 2차원 배열에서 index를 K값만큼 더하고 뺀 범위내의 모든 요소를 더한 값으로 치환하는 문제

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
  let result = [];
  for (let i = 0; i < mat.length; i++) {
    let row = [];
    for (let j = 0; j < mat[0].length; j++) {
      const r = [];
      const c = [];
      for (let k = i - K; k < i + K + 1; k++) {
        if (k > -1 && k < mat.length) r.push(k);
      }
      for (let l = j - K; l < j + K + 1; l++) {
        if (l > -1 && l < mat[0].length) c.push(l);
      }
      let newEl = 0;
      for (let m = 0; m < r.length; m++) {
        for (let n = 0; n < c.length; n++) {
          newEl += mat[r[m]][c[n]];
        }
      }
      row.push(newEl);
    }
    result.push(row);
  }
  return result;
};

// 단순하게 배열을 순회하여 범위를 다시 순회로 만들고, 그 범위를 또 순회해서 값을 뽑아냄
