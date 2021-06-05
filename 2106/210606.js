// Two Sum IV - Input is a BST

// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// 주어진 이진 탐색 트리에서 두 노드의 값의 합이 k가 나올 수 있는지 반환하는 문제

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let result = false;
  let tmp = [];

  const treeRecursion = (node, k) => {
    // tmp에 node가 있으면 반환
    if (tmp.includes(node.val)) return (result = true);

    // 없으면 k - node.val를 tmp에 저장
    tmp.push(k - node.val);

    // 재귀
    if (node.left) treeRecursion(node.left, k);
    if (node.right) treeRecursion(node.right, k);
  };

  // 재귀 시작
  treeRecursion(root, k);

  return result;
};
