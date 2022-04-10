// Binary Search Tree to Greater Sum Tree

// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to
// the original key plus the sum of all keys greater than the original key in BST.
// As a reminder, a binary search tree is a tree that satisfies these constraints:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example:
// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

// 주어진 이진 탐색 트리를 가장 큰 node의 합으로 이루어진 트리로 변경하여 반환하는 문제

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
var bstToGst = function (root) {
  const helper = (node, sum) => {
    if (!node) return sum;

    node.val += helper(node.right, sum);

    return helper(node.left, node.val);
  };

  helper(root, 0);

  return root;
};
// discuss 참조, 재귀 접근, 오른쪽부터 해서 왼쪽으로 더해 나가는 접근까지 했으나 구현 못함
