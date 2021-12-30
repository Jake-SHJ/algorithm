// Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// 주어진 이진 트리에서 가장 큰 깊이를 반환하는 문제

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
var maxDepth = function (root) {
  if (!root) return 0;
  let result = 0;
  const helper = (node, depth) => {
    if (depth > result) result = depth;
    if (node.left) helper(node.left, depth + 1);
    if (node.right) helper(node.right, depth + 1);
  };
  helper(root, 1);
  return result;
};
// 23일에 풀었던 문제와 비슷하지만, 23일 문제는 binary로 고정되어있지 않은 경우
