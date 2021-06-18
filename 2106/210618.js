// Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// 동일한 이진 트리인지 판별하는 문제

// 다양한 시도를 했으나, 조건문을 너무 복잡하게 사용하여 굳이 적어두진 않음
// 내부에 재귀함수를 두고 호출하도록 하였으나 discuss에 아주 간단하게 풀어놓은게 있어서 참고

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 함수 자체를 재귀호출, 외부/내부의 조건을 분할할 필요가 없음
