// Find Bottom Left Tree Value

// Given the root of a binary tree, return the leftmost value in the last row of the tree.

// Example:
// Input: root = [2,1,3]
// Output: 1

// 주어진 이진 트리에서 가장 깊은 곳의 요소를 반환하는 문제 (왼쪽을 우선으로 하고, 없으면 오른쪽)

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
var findBottomLeftValue = function(root) {
  const map = new Map();
  // dfs
  const findLeftBottom = (node, depth) => {
    ++depth;
    map.set(depth, node.val);
    if (node.right) findLeftBottom(node.right, depth);
    if (node.left) findLeftBottom(node.left, depth);
  } 
  findLeftBottom(root, 0);
  // 가장 깊이 있는 값 추출
  const maxDepth = Math.max(...map.keys());
  return map.get(maxDepth);
};
