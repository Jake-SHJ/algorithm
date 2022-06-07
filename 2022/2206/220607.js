// Convert BST to Greater Tree

// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST
// is changed to the original key plus the sum of all keys greater than the original key in BST.
// As a reminder, a binary search tree is a tree that satisfies these constraints:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example:
// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

// 주어진 이진탐색트리를 가장 큰 수로 이루어진 이진탐색트리로 변환하는 문제

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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0;
  // 무조건 오른쪽이 가장 큰 수
  const convertBST = (node) => {
    if (node != null) {
      // 오른쪽에 대한 재귀를 먼저 시작
      convertBST(node.right);
      sum += node.val;
      node.val = sum;
      // 왼쪽은 그 다음
      convertBST(node.left);
    }
    return node;
  };
  return convertBST(root);
};
// solution 참조, 무조건 오른쪽이 크다는 생각을 못해서 접근이 어려웠음
