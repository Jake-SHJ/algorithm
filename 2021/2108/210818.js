// Merge Two Binary Trees

// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap,
// then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.

// Example:
// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// 주어진 두 이진트리를 합친 이진트리를 반환하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
// 재귀를 통해 root1 이진트리에 root2 이진트리를 합침
