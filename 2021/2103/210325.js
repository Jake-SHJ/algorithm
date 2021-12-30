// Minimum Number of Vertices to Reach All Nodes

// Given a directed acyclic graph, with n vertices numbered from 0 to n-1,
// and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.
// Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.
// Notice that you can return the vertices in any order.

// Example:
// Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// Output: [0,3]
// Explanation: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].

// 전체 노드에 도달할 수 있는 최소한의 시작 노드를 구하는 문제
// edge[0]이 edge[1]에 존재하지 않으면 연결되지 않은 노드임을 알수있으므로 해당 값을 찾으면 됨

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const result = new Set();
  edges.map((edge, idx, arr) => {
    const exclude = arr.findIndex((a) => a[1] === edge[0]);
    if (exclude === -1) {
      return result.add(edge[0]);
    }
  });
  return Array.from(result);
};

// 처음 접근은 이렇게 했는데, 순회안에 findIndex 순회가 또있어서 그런지 timelimit에 걸림

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const edge1 = new Set();
  const edge2 = new Set();
  const result = new Set();

  edges.map((edge) => {
    edge1.add(edge[0]);
    edge2.add(edge[1]);
  });

  edge1.forEach((a) => {
    if (!edge2.has(a)) {
      result.add(a);
    }
  });

  return Array.from(result);
};
// 그래서 각 point를 set에 넣고 set에 있는지 없는지 순회함, 순회 안에 순회가 아니라 순회 후 순회로 바꾼것 뿐인데 timelimit 통과 했음
// 효율이 좋은 건 아님

var findSmallestSetOfVertices = function (n, edges) {
  let map = new Array(n);
  let ans = [];

  for (let [index, value] of edges) {
    map[value] = 1; // map에 edge[1]을 index로 1값을 넣음
  }

  // map = [ <1 empty item>, 1, 1, <1 empty item>, 1, 1 ], 0, 3은 없으므로 empty

  for (let i = 0; i < n; i++) {
    if (!map[i]) ans.push(i); // empty인 값의 index를 결과에 push
  }

  return ans;
};
// 효율 90% 이상대의 답안, 배열에 공간을 만들고 edge[1]값을 index로 하여 index에 값이 없으면 ans 배열에 값을 넣는 방식이다.
