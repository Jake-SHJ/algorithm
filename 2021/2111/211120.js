// Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// 주어진 이진 탐색 트리를 역순회한 배열을 반환하는 문제

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
var postorderTraversal = function (root) {
  // 없으면 조기 반환, 여기서 2번 틀림..
  if (!root) return [];

  let result = [];
  const helper = (node) => {
    // 재귀 먼저 시작
    node.left ? helper(node.left) : null;
    node.right ? helper(node.right) : null;
    // 마지막 재귀부터 차례대로 결과값 주입
    return result.push(node.val);
  };
  // 재귀 시작점
  helper(root);

  return result;
};
