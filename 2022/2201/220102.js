// Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

// Example:
// Input: root = [4,2,6,1,3]
// Output: 1

// 주어진 이진 탐색 트리에서 각 노드의 차의 절대값 중 가장 작은 값을 반환하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let nodes = [];
  let result;
  // 재귀를 통해 node들을 nodes에 모으면서 각 차를 구하여 result에 넣고 비교
  const helper = (node) => {
    if (!node) return;
    for (let i = 0; i < nodes.length; i++) {
      const diff = Math.abs(nodes[i] - node.val);
      if (!result) {
        result = diff;
        continue;
      }
      if (result > diff) result = diff;
    }
    nodes.push(node.val);
    node.left ? helper(node.left) : null;
    node.right ? helper(node.right) : null;
  };
  helper(root);
  return result;
};
