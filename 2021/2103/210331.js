// Score After Flipping Matrix

// We have a two dimensional matrix A where each value is 0 or 1.
// A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.
// After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
// Return the highest possible score.

// Example:
// Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// Output: 39
// Explanation:
// Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
// 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

// 주어진 2차원 배열에서 행 또는 열 기준으로 toggle 시켜서 가장 큰 수의 합을 구하는 문제

/**
 * @param {number[][]} A
 * @return {number}
 */
const toggleBinary = (value) => {
  return value === 0 ? 1 : 0;
};

const arrayToBinaryNumber = (arr) => {
  let result = "0b";
  arr.forEach((val) => {
    result += val;
  });
  return Number(result);
};

var matrixScore = function (A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    const toggledArr = [];
    A[i].forEach((val) => {
      toggledArr.push(toggleBinary(val));
    });
    arrayToBinaryNumber(toggledArr) > arrayToBinaryNumber(A[i])
      ? (A[i] = toggledArr)
      : null;
  }

  for (let j = 0; j < A[0].length; j++) {
    let columnArr = [];
    A.forEach((arr) => {
      columnArr.push(arr[j]);
    });
    if (columnArr.reduce((acc, cur) => acc + cur) < columnArr.length / 2) {
      A.forEach((arr) => {
        arr[j] = toggleBinary(arr[j]);
      });
    }
  }

  A.forEach((arr) => {
    result.push(arrayToBinaryNumber(arr));
  });

  return result.reduce((acc, cur) => acc + cur);
};

// 한번에 푸는 것은 성공
// 속도는 괜찮았으나 메모리 효율은 순회가 많아서 좋지 않았음
// toggle 기능과 배열을 2진수로 변환하는 기능은 분리시켰음
// 처음엔 행 기준으로 원래 행 배열과 toggle된 행 배열을 비교해서 배열을 교체시킴
// 두번째 순회에서 열 기준으로 배열을 뽑아서 합이 컬럼 길이의 절반보다 작으면 toggle 시킴
// 마지막으로 나온 배열들을 2진수로 변경 > 10진수로 전환 후 reduce로 합을 반환
