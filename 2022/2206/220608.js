// Trim a Binary Search Tree

// Given the root of a binary search tree and the lowest and highest boundaries as low and high, 
// trim the tree so that all its elements lies in [low, high]. 
// Trimming the tree should not change the relative structure of the elements that will remain in the tree 
// (i.e., any node's descendant should remain a descendant). 
// It can be proven that there is a unique answer.
// Return the root of the trimmed binary search tree. 
// Note that the root may change depending on the given bounds.

// Example:
// Input: root = [1,0,2], low = 1, high = 2
// Output: [1,null,2]

// 주어진 이진 탐색 트리에서 범위 밖의 node를 제거한 이진 탐색 트리를 반환하는 문제

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if (root === null) return root;
  if (root.val > high) return trimBST(root.left, low, high);
  if (root.val < low) return trimBST(root.right, low, high);

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
// solution 참조, 범위를 벗어나면 자식 노드를 반환하도록 처리
