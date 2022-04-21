// All Possible Full Binary Trees

// Given an integer n, return a list of all possible full binary trees with n nodes.
// Each node of each tree in the answer must have Node.val == 0.
// Each element of the answer is the root node of one possible tree.
// You may return the final list of trees in any order.
// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

// Example:
// Input: n = 7
// Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]

// 주어진 숫자만큼의 노드로 이루어진 자식 노드가 0 또는 2인 모든 완벽한 이진 트리를 반환하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (number) {
  // 짝수 개는 FBT가 될 수 없음
  if (number % 2 === 0) return [];
  let memo = new Array(number + 1).fill(null).map((i) => []);
  const helper = (n) => {
    // 이미 값이 메모된 경우
    if (memo[n].length > 0) return memo[n];
    // base
    if (n === 1) return [new TreeNode(0)];
    // FBT 초기화
    const trees = [];
    for (let i = 1; i < n - 1; i += 2) {
      let lt = helper(i);
      let rt = helper(n - 1 - i);
      lt.forEach((ltr) => {
        rt.forEach((rtr) => {
          trees.push(new TreeNode(0, ltr, rtr));
        });
      });
    }
    memo[n] = trees;
    return memo[n];
  };
  return helper(number);
};
// discuss 참조, 아래는 아이디어
// The idea is that perfect binary tree of 1 i.e. PBT(1) is a single node without left and right nodes.
// A perfect binary tree of 3 is :
// - a node with left = PBT(1) and right = PBT(1)
// A perfect binary tree of 5 is :
// - a node with left = PBT(3) and right = PBT(1)
// - a node with left = PBT(1) and right = PBT(3)
// A perfect binary tree of 7 is :
// - a node with left = PBT(5) and right = PBT(1)
// - a node with left = PBT(3) and right = PBT(3)
// - a node with left = PBT(1) and right = PBT(5)
// and so on...
