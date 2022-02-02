// Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// 주어진 이진 트리가 대칭을 이루고 있는지 여부를 반환하는 문제

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
var isSymmetric = function (root) {
  let leftTree = [],
    rightTree = [];
  // 왼쪽 트리 저장
  const left = (node) => {
    // 빈 노드의 위치 차이가 있을 수 있으므로 마지막 null 저장
    if (!node) return leftTree.push(null);
    leftTree.push(node.val);
    left(node.left);
    left(node.right);
  };
  // 오른쪽 트리 저장
  const right = (node) => {
    // 빈 노드의 위치 차이가 있을 수 있으므로 마지막 null 저장
    if (!node) return rightTree.push(null);
    rightTree.push(node.val);
    right(node.right);
    right(node.left);
  };
  // 재귀함수 호출
  left(root.left);
  right(root.right);
  // 대칭 여부 확인
  for (let i = 0; i < leftTree.length; i++) {
    if (leftTree[i] !== rightTree[i]) return false;
  }
  return true;
};
