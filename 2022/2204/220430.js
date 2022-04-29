// Path In Zigzag Labelled Binary Tree

// In an infinite binary tree where every node has two children, the nodes are labelled in row order.
// In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right,
// while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.
// Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.

// Example:
// Input: label = 14
// Output: [1,3,4,14]

// 주어진 규칙에 따른 이진 트리에서 label까지의 경로를 반환하는 문제

/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let level = 0,
    res = [label];

  while ((label = parseInt(label / 2))) {
    level++;
  }

  for (let i = level - 1; i >= 0; i--) {
    // 이런 규칙은 어떻게 찾은거지..
    let sum = 2 ** i + 2 ** (i + 1) - 1;
    let val = parseInt(res[0] / 2);
    res.unshift(sum - val);
  }

  return res;
};
// discuss 참조..
