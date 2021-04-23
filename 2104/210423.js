// N-ary Tree Level Order Traversal

// Given an n-ary tree, return the level order traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Example:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]

// 주어진 트리에서 같은 레벨별로 묶인 배열을 반환하는 문제

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  if (!root) return result;

  const treeCycle = (node, level) => {
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        result[level]
          ? result[level].push(node.children[i].val)
          : result.push([node.children[i].val]);
        if (node.children[i].children) {
          const thisLevel = level + 1;
          treeCycle(node.children[i], thisLevel);
        }
      }
    }
  };

  result.push([root.val]);
  treeCycle(root, 1);

  return result;
};

// 한번 통과하지 못했는데 원인은 root가 비어있는 경우를 고려하지 않아 result.push([root.val]);에서 root.val이 없어서 에러가 났음
// 초기에 root에 값이 존재하지 않으면 빈배열 그대로 반환하도록 수정하여 에러 fix
// 주어진 트리의 경우 이진트리처럼 left, right 고정되어 있는게 아니기때문에 children 기준으로 순회하였음
