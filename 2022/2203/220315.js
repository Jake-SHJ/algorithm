// Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// 주어진 이진 트리에서 leaf까지 가장 작은 깊이를 반환하는 문제

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
var minDepth = function (root) {
  let result = Infinity;
  if (!root) return 0;
  // 재귀로 깊이 확인
  const checkDepth = (node, depth) => {
    depth += 1;
    // child가 있으면 계속 진행
    if (node.left) checkDepth(node.left, depth);
    if (node.right) checkDepth(node.right, depth);
    // leaf에 도달했을 때, 깊이 확인
    if (!node.left && !node.right && result > depth) return (result = depth);
  };

  checkDepth(root, 0);

  return result;
};
