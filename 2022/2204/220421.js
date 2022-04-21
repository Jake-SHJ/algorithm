// Balance a Binary Search Tree

// Given the root of a binary search tree, return a balanced binary search tree with the same node values.
// If there is more than one answer, return any of them.
// A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

// Example:
// Input: root = [1,null,2,null,3,null,4,null,null]
// Output: [2,1,3,null,null,null,4]
// Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.

// 주어진 이진 탐색 트리가 각 노드의 깊이가 1 이상 차이가 나지 않도록 하여 반환하는 문제

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
// node 탐색
const traverse = (root, arr) => {
  if (root === null) return;
  traverse(root.left, arr);
  arr.push(root.val);
  traverse(root.right, arr);
};
// TreeNode 생성
const construct = (arr) => {
  if (arr.length === 0) return null;
  // arr의 중간 지점을 root.val
  const middle = parseInt(arr.length / 2);
  // root.val을 기점으로 node 생성
  return new TreeNode(
    arr[middle],
    construct(arr.slice(0, middle)),
    construct(arr.slice(middle + 1))
  );
};

var balanceBST = function (root) {
  const arr = [];
  traverse(root, arr);
  return construct(arr);
};
// discuss 참조
