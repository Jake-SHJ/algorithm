// Maximum Level Sum of a Binary Tree

// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

// Example:
// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation:
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.

// 주어진 이진 트리의 각 단계별 합 중 가장 큰 합을 가진 단계를 반환하는 문제

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
var maxLevelSum = function (root) {
  const sumOfSteps = [];
  const treeCycle = (root, step) => {
    sumOfSteps[step]
      ? (sumOfSteps[step] += root.val)
      : (sumOfSteps[step] = root.val);
    root.left ? treeCycle(root.left, step + 1) : null;
    root.right ? treeCycle(root.right, step + 1) : null;
  };
  treeCycle(root, 0);
  return sumOfSteps.indexOf(Math.max(...sumOfSteps)) + 1;
};

// 각 단계별 합을 배열에 넣고, 배열 중 가장 큰 수의 index + 1 단계를 반환
// 예상보다 속도가 준수하게 나와서 놀랐으나 메모리는 30% 정도에 그침
