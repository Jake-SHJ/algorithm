// Find if Path Exists in Graph

// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive).
// The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi.
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
// You want to determine if there is a valid path that exists from vertex source to vertex destination.
// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Example:
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// 주어진 배열에서 source부터 destination까지 도달할 수 있는지의 여부를 반환하는 문제

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (edges.length === 0) return true;

  let result = 0;

  const findPath = (start, count) => {
    if (count > n) return;

    const next = edges.filter((el) => el[0] === start[1]);

    for (let i = 0; i < next.length; i++) {
      if (next[i][1] === destination) {
        result++;
      }

      findPath(next[i], count + 1);
    }
  };

  for (let i = 0; i < edges.length; i++) {
    if (edges[i][0] === source && edges[i][1] === destination) return true;
    if (edges[i][0] === source) {
      findPath(edges[i], 0);
    }
  }

  return result !== 0;
};
// 시도는 했으나 이 방법은 [0] => [1] 의 순서를 박아두고 시작해서 노드가 앞뒤로 섞여있으면 문제가 됨

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  const graph = {};

  edges.forEach(([a, b]) => {
    if (!graph[a]) {
      graph[a] = [b];
    } else graph[a].push(b);

    if (!graph[b]) {
      graph[b] = [a];
    } else graph[b].push(a);
  });

  const visited = new Array(n).fill(false);
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === end) {
      return true;
    }
    visited[node] = true;
    graph[node].forEach((neighbor) => {
      if (!visited[neighbor]) {
        queue.push(neighbor);
      }
    });
  }

  return false;
};
// discuss 참조, 그래프를 객체로 생성하고 지나간 노드는 체크하면서 destination에 도달할 수 있는지 체크
// easy 난이도가 맞나 싶음..
