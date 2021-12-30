// Binary Tree Pruning

// We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.
// Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.
// (Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

// Example:
// Input: [1,null,0,0,1]
// Output: [1,null,0,null,1]
// Explanation:
// Only the red nodes satisfy the property "every subtree not containing a 1".
// The diagram on the right represents the answer.

// 이진 트리에서 leaf가 0인 경우 제거한 이진트리를 반환하는 문제

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
var pruneTree = function (root) {
  if (root.left) root.left = pruneTree(root.left);
  if (root.right) root.right = pruneTree(root.right);
  return !root.left && !root.right && root.val === 0 ? null : root;
};

// leaf로 가서 판단해야하기 때문에 left 나 right가 있으면 재귀를 통해 leaf까지 내려감
// leaf에서 val가 0이면 null 반환, 아니면 그대로 유지
