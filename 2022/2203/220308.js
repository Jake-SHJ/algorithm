// Second Minimum Node In a Binary Tree

// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node.
// If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.
// More formally, the property root.val = min(root.left.val, root.right.val) always holds.
// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
// If no such second minimum value exists, output -1 instead.

// Example:
// Input: root = [2,2,5,null,null,5,7]
// Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.

// 주어진 이진 트리에서 2번째로 작은 수를 반환하는 문제

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
var findSecondMinimumValue = function (root) {
  const set = new Set();
  // node들을 Set에 중복없이 저장
  const helper = (node) => {
    if (!node) return;
    set.add(node.val);
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  // 숫자가 단일이면 2번째로 작은 숫자는 없으므로 -1 조기 반환
  if (set.size === 1) return -1;
  // 첫번째로 작은 숫자 Set에서 제거
  set.delete(Math.min(...set.values()));
  // 두번째로 작은 숫자 반환
  return Math.min(...set.values());
};
