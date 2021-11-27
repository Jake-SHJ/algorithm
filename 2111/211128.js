// Binary Tree Preorder Traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// 주어진 이진 트리를 순서대로 배열로 반환하는 문제

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = [];
  const helper = (node) => {
    if (!node) return;
    // 재귀에서 역순이므로 오른쪽이 먼저
    if (node.right) helper(node.right);
    if (node.left) helper(node.left);
    // 스택이 해소될때 역순으로 실행되므로 unshift로 배열 생성
    return result.unshift(node.val);
  };
  helper(root);
  return result;
};
