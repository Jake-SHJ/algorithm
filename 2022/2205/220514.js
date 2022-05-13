// Lowest Common Ancestor of Deepest Leaves

// Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.
// Recall that:
//  - The node of a binary tree is a leaf if and only if it has no children
//  - The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
//  - The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

// Example:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4]
// Output: [2,7,4]
// Explanation: We return the node with value 2, colored in yellow in the diagram.
// The nodes coloured in blue are the deepest leaf-nodes of the tree.
// Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.

// 주어진 이진 트리에서 가장 깊은 leaf에서의 가장 낮은 공통 조상을 반환하는 문제

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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  let depth = 0,
    res;

  const dfs = (node, d) => {
    depth = Math.max(depth, d);
    if (!node) return d;
    const deepestLeft = dfs(node.left, d + 1);
    const deepestRight = dfs(node.right, d + 1);
    if (deepestLeft === depth && deepestRight === depth) res = node;
    return Math.max(deepestLeft, deepestRight);
  };

  dfs(root, 0);

  return res;
};
// discuss 참조, 문제 자체가 이해하기 어렵다
