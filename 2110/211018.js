// Average of Levels in Binary Tree

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.
// Answers within 10-5 of the actual answer will be accepted.

// Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

// 주어진 이진 트리에서 같은 레벨에 있는 값들의 평균을 반환하는 문제

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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let temp = [];

  // 레벨별로 temp에 저장
  const helper = (node, step) => {
    if (temp[step]) {
      temp[step].push(node.val);
    } else {
      temp[step] = [node.val];
    }

    if (node.left) helper(node.left, step + 1);
    if (node.right) helper(node.right, step + 1);
  };

  helper(root, 0);

  // 저장된 값의 평균 반환
  return temp.map((arr) => {
    const len = arr.length;
    return arr.reduce((acc, cur) => acc + cur) / len;
  });
};
