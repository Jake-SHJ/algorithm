// Balanced Binary Tree

// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// 주어진 이진 트리에서 왼쪽 오른쪽의 높이가 1이 넘게 차이가 나는지 여부를 반환하는 문제

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0;
    let left = 1 + dfs(node.left);
    let right = 1 + dfs(node.right);
    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right);
  };

  return dfs(root) === Infinity ? false : true;
};
// 재귀로 시도는 했으나 4번 다 근본적인 문제해결이 안되서 discuss 참조
// 각 node마다의 left, right 높이를 구해서 비교하는 방식
// 내 시도는 전부 각 node에서의 높이 결과값을 배열에 저장하는 방식을 썼는데,
// 근본적인 높이 비교에 어려움이 있음(어떤 높이 값을 서로 비교해야하는지 알 수 없음)
