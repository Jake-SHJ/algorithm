// Construct Binary Search Tree from Preorder Traversal

// Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.
// It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.
// A binary search tree is a binary tree where for every node, any descendant of Node.
// left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.
// A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

// Example:
// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const tree = new TreeNode(preorder[0]);
  preorder.shift();
  const largerIdx = preorder.findIndex((el) => el > tree.val);

  const leftArr = largerIdx === -1 ? preorder : preorder.slice(0, largerIdx);
  const rightArr =
    largerIdx === -1 ? [] : preorder.slice(largerIdx, preorder.length);

  leftArr.length === 0
    ? (tree.left = null)
    : (tree.left = bstFromPreorder(leftArr));
  rightArr.length === 0
    ? (tree.right = null)
    : (tree.right = bstFromPreorder(rightArr));

  return tree;
};

// 이진 트리를 계속 접해서 그런지 푸는데 어려움도 없었고, 시간도 오래 걸리지 않음
