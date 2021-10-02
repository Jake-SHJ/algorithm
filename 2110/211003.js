// Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// 주어진 이진 트리를 중위 순회로 반환하는 문제

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
var inorderTraversal = function (root) {
  const result = [];
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
};
// 중위 순회가 뭔지 몰라서 찾아봤으나 어떻게 구현하는건지 당최 이해가 안가서 discuss 참조
// 왼 > root > 오른 순으로 탐색하는 거라고 함
// 그래서 재귀문에서 왼쪽으로 먼저 계속 순회를 타고 들어가는 식으로 되어있음
