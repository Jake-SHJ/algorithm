// Maximum Binary Tree

// You are given an integer array nums with no duplicates.
// A maximum binary tree can be built recursively from nums using the following algorithm:

// 1. Create a root node whose value is the maximum value in nums.
// 2. Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// 3. Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

// Example:
// Input: nums = [3,2,1,6,0,5]
// Output: [6,3,5,null,2,0,null,null,1]
// Explanation: The recursive calls are as follow:
// - The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
//     - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
//         - Empty array, so no child.
//         - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
//             - Empty array, so no child.
//             - Only one element, so child is a node with value 1.
//     - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
//         - Only one element, so child is a node with value 0.
//         - Empty array, so no child.

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
var constructMaximumBinaryTree = function (nums) {
  if (nums.length < 1) return null;
  let root = Math.max(...nums);
  let rootIdx = nums.indexOf(root);

  let result = new TreeNode(root);

  let leftArr = nums.slice(0, rootIdx);
  let rightArr = nums.slice(rootIdx + 1, nums.length);

  result.left = constructMaximumBinaryTree(leftArr);
  result.right = constructMaximumBinaryTree(rightArr);

  return result;
};

// 가장 큰 수가 root, 그 기준으로 왼쪽, 오른쪽으로 갈라지고, 그 중 가장 큰 값이 다시 root가 됨

function constructMaximumBinaryTree(nums) {
  return next(0, nums.length - 1);

  function next(l, r) {
    if (l > r) return null;
    let maxIndex = -1,
      max = -Infinity;
    for (let i = l; i <= r; i++) {
      if (nums[i] > max) {
        maxIndex = i;
        max = nums[i];
      }
    }
    return {
      val: max,
      left: next(l, maxIndex - 1),
      right: next(maxIndex + 1, r),
    };
  }
}
// discuss 참고 답안, index로 깔끔하게 풀어낸게 인상적..
