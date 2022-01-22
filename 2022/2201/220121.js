// Cousins in Binary Tree

// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y,
// return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.
// Two nodes of a binary tree are cousins if they have the same depth with different parents.
// Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

// Example:
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// 주어진 이진 탐색 트리에서 x와 y가 같은 depth에 있고, 부모 노드가 다른 상태인지의 여부를 반환하는 문제

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let xDepth, yDepth, xParent, yParent;

  const helper = (node, depth, parent) => {
    if (!node) return;

    if (node.val === x) {
      xDepth = depth;
      xParent = parent;
    }

    if (node.val === y) {
      yDepth = depth;
      yParent = parent;
    }

    helper(node.left, depth + 1, node.val);
    helper(node.right, depth + 1, node.val);
  };

  helper(root, 0, null);

  return xDepth === yDepth && xParent !== yParent;
};
