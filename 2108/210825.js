// N-ary Tree Preorder Traversal

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal.
// Each group of children is separated by the null value (See examples)

// Example:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

// 주어진 트리를 순서대로 하는 배열을 반환하는 문제

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];

  const recurseNode = (node) => {
    if (!node) return;
    result.push(node.val);
    for (const child of node.children) {
      recurseNode(child);
    }
  };

  recurseNode(root);
  return result;
};
// 어제 푼 문제의 반대 성격의 문제
// 들어온 순서대로 push를 먼저하면 해결
