// N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal.
// Each group of children is separated by the null value (See examples)

// Example:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]

// 주어진 트리를 역순으로 하는 배열을 반환하는 문제

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];

  const recurseNode = (node) => {
    if (!node) return;
    // 이 위치에서 result.unshift(node.val) 로 풀려고 했음, 순차적으로 내려가기 때문에 원하는 답은 구할 수 없음
    if (node.children) {
      for (const child of node.children) {
        recurseNode(child);
      }
    }
    // 순회문이 끝나면 push가 역순으로 자연스럽게 일어남(재귀의 마지막부터 순차적으로 push가 동작하기 때문!)
    result.push(node.val);
  };

  recurseNode(root);
  return result;
};
