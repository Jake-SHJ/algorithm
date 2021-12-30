// Maximum Depth of N-ary Tree

// Given a n-ary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.
// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value (See examples).

// Example:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

// 주어진 트리의 최대 깊이를 반환하는 문제

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let max = -1;
  const findDepth = (node, depth) => {
    if (max < depth) max = depth;
    for (const child of node.children) {
      findDepth(child, depth + 1);
    }
  };
  findDepth(root, 1);
  return max;
};

// children을 직접 순회해야 함
