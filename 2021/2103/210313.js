// All Paths From Source to Target

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.
// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example:
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

// graph[0] 노드부터 end 노드까지 갈 수 있는 모든 루트를 구하는 문제
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const start = 0;
  let result = [];

  const chaseNode = (next, resultIdx) => {
    if (!graph[next]) return;
    for (let j = 0; j < graph[next].length; j++) {
      const nextNode = graph[next][j];
      result[resultIdx].push(nextNode);
      chaseNode(nextNode, resultIdx);
    }
  };

  for (let i = 0; i < graph.length; i++) {
    const nextNode = graph[start][i];
    result[i] = [start, nextNode];
    chaseNode(nextNode, i);
  }

  return result.filter((el) => !el.includes(undefined));
};
// result[i]에 값이 쌓이길 바랬으나, 최초 이외의 node에서 i 분기가 안되어 중첩으로 결과가 나옴
// Input: [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4,2,3,4,4]]
// Expected: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

// 더 풀어보려 했지만 오히려 코드가 더 꼬여가서 실패..

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  var res = [];
  var path = [];

  path.push(0);
  dfsSearch(0);

  function dfsSearch(node) {
    if (node == graph.length - 1) {
      res.push(path.slice(0));
    } else
      for (nextNode of graph[node]) {
        path.push(nextNode);
        dfsSearch(nextNode); // 순회 시작
        path.pop(); // 끝나고 돌아오면 path에 추가됐었던 node만 제거 (내가 구하지 못한 이전 배열의 정보를 그대로 유지하는 법)
      }
  }
  return res;
};

// 패스에 저장하고 패스가 끝에 도달하면 result에 넣는 방식
