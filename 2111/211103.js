// Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Example:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// 주어진 배열의 요소를 각 서브트리의 깊이가 동일한 이진 트리로 반환하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  const half = Math.floor(nums.length / 2);
  let result = new TreeNode(nums[half]);

  result.left = sortedArrayToBST(nums.slice(0, half));
  result.right = sortedArrayToBST(nums.slice(half + 1));

  return result;
};

// 반 가르고 트리노드 진입까지는 성공했으나..
// result.left = sortedArrayToBST(nums.slice(0, half));
// result.right = sortedArrayToBST(nums.slice(half + 1)); 요부분은 결국 discuss 참조
// 여전히 이진 트리 순회는 개념이 어렵..
