// Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Example:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// 주어진 이진 트리에서 root부터 leaf까지의 모든 경로를 배열로 반환하는 문제

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];

  const helper = (node, str) => {
    // 시작점과 그 이후 스트링 생성
    if (str === "") {
      str = String(node.val);
    } else {
      str += "->" + String(node.val);
    }
    // 각 child로 재귀
    if (node.left) helper(node.left, str);
    if (node.right) helper(node.right, str);
    // leaf에 도달하면 스트링 반환
    if (!node.left && !node.right) return result.push(str);
  };
  helper(root, "");
  return result;
};
