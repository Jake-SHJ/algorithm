// Diameter of Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Example:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// 주어진 이진트리에서 구할 수 있는 가장 긴 경로를 반환하는 문제

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
var diameterOfBinaryTree = function (root) {
  let depth = 0;

  const helper = (node) => {
    if (!node) return 0;
    const left = helper(node.left);
    const right = helper(node.right);
    depth = Math.max(depth, left + right);
    return Math.max(left, right) + 1;
  };

  helper(root);

  return depth;
};

// discuss 참조, root를 꼭 거쳐야한다는 조건이 없어서 좀 더 까다로웠던거 같음
// 모든 노드에서 left, right를 찾아서 길이 대조를 하는 방식
