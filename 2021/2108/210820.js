// Increasing Order Search Tree

// Given the root of a binary search tree,
// rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree,
// and every node has no left child and only one right child.

// Example:
// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

// 주어진 이진 탐색 트리를 오름차순으로 오른쪽으로 배열된 이진 탐색 트리로 반환하는 문제

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
var increasingBST = function (root) {
  let newRoot = null,
    newTree = null;

  const helper = (node) => {
    if (!node) return;
    helper(node.left);

    if (!newRoot) {
      newRoot = newTree = node;
    } else {
      newTree.right = node;
      newTree = newTree.right;
      node.left = null;
    }

    helper(node.right);
  };

  helper(root);
  return newRoot;
};

// 문제를 풀다가 너무 꼬여서 discuss를 참고했는데 더 알수없게 됨
// 이진 탐색 트리의 정렬에 대해서 고민을 해봐야할듯..
