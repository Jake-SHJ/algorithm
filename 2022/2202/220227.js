// Subtree of Another Tree

// Given the roots of two binary trees root and subRoot,
// return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
// The tree tree could also be considered as a subtree of itself.

// Example:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// 주어진 서브 트리가 트리의 구조 내에 존재하는지 여부를 반환하는 문제

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (root !== null && subRoot === null) return false;
  const strRoot = JSON.stringify(root);
  const strSubRoot = JSON.stringify(subRoot);
  return strRoot.indexOf(strSubRoot) !== -1;
};
// discuss 참조, 보통 DFS 이런걸로 풀던데.. 이게 이해하기는 훨씬 쉬운듯..

// 일반적인 DFS
const isSubtree = (root, subRoot) => {
  const areEqual = (node1, node2) => {
    if (!node1 || !node2) return !node1 && !node2;
    if (node1.val !== node2.val) return false;
    return (
      areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
    );
  };
  const dfs = (node) => {
    if (!node) return false;
    if (areEqual(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
};
