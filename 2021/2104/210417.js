// Interval List Intersections

// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj].
// Each list of intervals is pairwise disjoint and in sorted order.
// Return the intersection of these two interval lists.
// A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.
// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example,
// the intersection of [1, 3] and [2, 4] is [2, 3].

// Example:
// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

// 주어진 두 배열의 범위에서 겹치는 범위의 배열을 반환하는 문제

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  if (firstList.length === 0 || secondList.length === 0) return [];

  const result = [];

  for (let i = 0; i < firstList.length; i++) {
    const f = firstList[i];

    for (let j = 0; j < secondList.length; j++) {
      const s = secondList[j];

      if (f[0] > s[1] || f[1] < s[0]) {
        continue;
      } else if (f[0] <= s[0] && f[1] <= s[1]) {
        result.push([s[0], f[1]]);
      } else if (f[0] <= s[0] && f[1] >= s[1]) {
        result.push([s[0], s[1]]);
      } else if (f[0] >= s[0] && f[1] >= s[1]) {
        result.push([f[0], s[1]]);
      } else if (f[0] >= s[0] && f[1] <= s[1]) {
        result.push([f[0], f[1]]);
      }
    }
  }

  return result;
};

// 2배열을 중첩 순회시켜서 겹치는 범위에 대한 경우의 수를 if - else if 문으로 찾아낸 방법

const intervalIntersection = (A, B) => {
  let i = 0,
    j = 0,
    ans = [];
  while (i < A.length && j < B.length) {
    let x1 = Math.max(A[i][0], B[j][0]), // 겹치는 범위에서 가장 작은 수
      x2 = Math.min(A[i][1], B[j][1]); // 겹치는 범위에서 가장 큰 수
    // 그 수가 조건에 맞으면
    if (x1 <= x2) {
      ans.push([x1, x2]);
    }
    // 조건에 맞지 않는 경우, i와 j를 올려나간다
    if (A[i][1] <= B[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
};

// discuss에 찾아보니 이렇게 하는게 더 효율적이었다.
// 2개의 배열을 while문으로 묶어서 처리하고 i와 j를 상황에 맞춰 올려나가는 방식, 불필요한 순회를 줄일 수 있다.
