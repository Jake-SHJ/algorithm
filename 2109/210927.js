// Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// Example:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// 주어진 이진 트리를 뒤집어서 반환하는 문제

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
var invertTree = function (root) {
  if (!root) return root;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};
// 최초 풀이

var invertTree = function (root) {
  if (root) {
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }
  return root;
};
// discuss 참고, 리팩터링

var invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};
// discuss 참고, 한단계 더 나아간 방법
