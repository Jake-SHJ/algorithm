// K Closest Points to Origin

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example:
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// [0, 0] 에 가장 가까운 k개의 포인트를 반환하는 문제

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let tmp = [];

  for (let i = 0; i < points.length; i++) {
    const distance = Math.sqrt(
      Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)
    );

    if (tmp.length < k) {
      tmp.push([distance, i]);
    } else {
      for (let j = 0; j < k; j++) {
        if (tmp[j][0] > distance) {
          // 그냥 작으면 바로 교체해서 문제.. 가장 큰 수를 교체해야 한다.
          tmp.splice(j, 1);
          tmp.push([distance, i]);
          break;
        }
      }
    }
  }

  return tmp.map((el) => {
    return points[el[1]];
  });
};

var kClosest = function (points, k) {
  let result = [];
  let tmp = points.map((point, i) => {
    return [Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)), i]; // [거리값, points의 index]
  });

  let sortedTmp = tmp.sort((a, b) => a[0] - b[0]); // 거리값이 작은 순서로 sort

  for (let i = 0; i < k; i++) {
    result.push(points[sortedTmp[i][1]]); // k 값만큼 순회하여 결과에 push
  }

  return result;
};

// 설계 자체를 바꿔서 쉽게 풀 수 있었음
