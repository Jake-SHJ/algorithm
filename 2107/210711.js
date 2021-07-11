// Find Center of Star Graph

// There is an undirected star graph consisting of n nodes labeled from 1 to n.
// A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi.
// Return the center of the given star graph.

// Example:
// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

// 주어진 star graph 배열에서 중앙을 담당하는 숫자를 반환하는 문제

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const map = new Map();
  let result;

  for (let i = 0; i < edges[0].length; i++) {
    map.has(edges[0][i])
      ? map.set(edges[0][i], map.get(edges[0][i]) + 1)
      : map.set(edges[0][i], 1);
    map.has(edges[1][i])
      ? map.set(edges[1][i], map.get(edges[1][i]) + 1)
      : map.set(edges[1][i], 1);
  }

  for (let [key, value] of map) {
    if (value === 2) {
      result = key;
    }
  }

  return result;
};

// [0][0], [0][1], [1][0], [1][1] 4개를 Map에 넣고 갯수를 확인하여 반환하게끔 했는데 너무 복잡하게 해결한 감이 없지않음

var findCenter = function (edges) {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};

// discuss에서 발견한 방법, 방식 자체는 위와 거의 동일하나 표현과 사용된 메서드에서 큰 차이
// 사실 속도나 메모리는 크게 차이 안남
