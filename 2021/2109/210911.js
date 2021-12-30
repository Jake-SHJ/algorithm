// The K Weakest Rows in a Matrix

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians).
// The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
// A row i is weaker than a row j if one of the following is true:
// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

// Example:
// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].

// 주어진 2차원 배열에서 그 합이 적은 row의 index를 정렬하여, 주어진 k 값의 index전까지의 index 배열을 반환하는 문제

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    map.set(
      i,
      mat[i].reduce((acc, cur) => acc + cur)
    );
  }

  return [...map]
    .sort((a, b) => a[1] - b[1])
    .map((val) => val[0])
    .filter((val, i) => i < k);
};
// Map으로 인덱스와 row의 숫자 합을 저장
// 반환지점에서 Map을 array로 변환 > 숫자합이 작은 순서대로 정렬 > index값만 배열에 남김 > k 전까지 필터링
