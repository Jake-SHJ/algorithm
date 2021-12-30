// All Elements in Two Binary Search Trees

// Given two binary search trees root1 and root2.
// Return a list containing all the integers from both trees sorted in ascending order.

// Example:
// Input: root1 = [2,1,4], root2 = [1,0,3]
// Output: [0,1,1,2,3,4]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const result = [];
  const treeCycle = (root) => {
    if (!root) return;
    result.push(root.val);
    root.left ? treeCycle(root.left) : null;
    root.right ? treeCycle(root.right) : null;
  };
  treeCycle(root1);
  treeCycle(root2);
  return result.sort((a, b) => a - b);
};

// 이진 트리 순회하여 값을 전부 배열에 넣은 다음, sort 처리
