// Search in a Binary Search Tree

// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
// If such a node does not exist, return null.

// Example:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// 주어진 이진 탐색 트리에서 val 값과 같은 요소의 서브트리까지 반환하는 문제

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let result = null;
  const searchTree = (node) => {
    if (!node) return;
    if (node.val === val) {
      return (result = node);
    } else {
      node.left ? searchTree(node.left) : null;
      node.right ? searchTree(node.right) : null;
    }
  };
  searchTree(root);
  return result;
};
// 재귀함수를 따로 만드는 형식

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
};
// 순수 재귀함수 형식
