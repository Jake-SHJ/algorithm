// Sum of Root To Leaf Binary Numbers

// You are given the root of a binary tree where each node has a value 0 or 1.
// Each root-to-leaf path represents a binary number starting with the most significant bit.
// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
// Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.

// Example:
// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// 주어진 이진 탐색 트리의 루트부터 리프까지의 이진수 조합의 합을 반환하는 문제

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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let result = [];
  const recurseTree = (node, sum) => {
    if (!node) return;

    sum += String(node.val);

    node.left && recurseTree(node.left, sum);
    node.right && recurseTree(node.right, sum);

    !node.left && !node.right && result.push(parseInt(sum, 2));
  };
  recurseTree(root, "");
  return result.reduce((acc, cur) => acc + cur);
};
