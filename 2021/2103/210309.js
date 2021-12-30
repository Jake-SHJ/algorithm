// Sort the Matrix Diagonally

// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end.
// For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].
// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

// Example 1:
// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

// 문제 자체는 어렵지 않다. 2차원 배열에서 왼쪽 위에서 오른쪽 아래로 향하는 대각선으로 나열된 숫자들을 sort하는 문제
// 하지만, 못풀었음... 아래는 discuss 참고한 답안

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  let map = {};
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let d = i - j; // 3, 1 이랑 2, 0이 겹치지 않나? 라고 생각했는데 아래에 정리한걸보면, 같은 라인에서의 x, y의 차가 모두 같다.
      if (!map[d]) {
        map[d] = []; // map에 key가 없으면, key에 해당하는 빈 배열을 할당하고
      }
      map[d].push(mat[i][j]); // 순차대로 value를 밀어넣는다.
    }
  }
  for (let key in map) {
    // 각 key 별로 할당된 배열을 순회하여
    map[key].sort((a, b) => {
      // sort를 하고
      return a - b;
    });
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let d = i - j; // 해당하는 라인일때
      mat[i][j] = map[d].shift(); // 순서대로 map에서 꺼내온다.
    }
  }
  return mat;
};

// [2, 0] i - j = 2
// [1, 0] [2, 1] i - j = 1
// [0, 0] [1, 1] [2, 2] i - j = 0
// [0, 1] [1, 2] [2, 3] i - j = -1
// [0, 2] [1, 3] i - j = -2
// [0, 3] i - j = -3

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const xPoint = mat.length - 1;
  const yPoint = mat[0].length - 1;

  for (let i = 0; i < yPoint; i++) {
    mat[xPoint - i][i];
  }

  //...?
};

// 어떻게 접근은 시작해서 각 축별로 길이는 구했으나, 어떻게 순회를 돌고 순회돌고 나온 값을 어떻게 sort 할 것인가가 전혀 생각이 안남...
// 각 라인에서의 x, y의 차가 같다 라는 포인트를 못찾으면 쉽게 구할 수 없는 문제, 좀 더 유연한 사고를 하도록 노력해야겠다..
