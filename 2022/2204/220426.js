// Find Elements in a Contaminated Binary Tree

// Given a binary tree with the following rules:
// root.val == 0
// If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
// If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
// Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.
// Implement the FindElements class:
// FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
// bool find(int target) Returns true if the target value exists in the recovered binary tree.

// Example:
// Input
// ["FindElements","find","find"]
// [[[-1,null,-1]],[1],[2]]
// Output
// [null,false,true]
// Explanation
// FindElements findElements = new FindElements([-1,null,-1]);
// findElements.find(1); // return False
// findElements.find(2); // return True

// 주어진 이진 트리를 규칙대로 숫자를 지정했을 때, find 함수로 node가 있고 없음을 반환하는 문제

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
 */
var FindElements = function (root) {
  root.val = 0;
  const set = new Set([0]);

  const helper = (node) => {
    if (node.left) {
      set.add(2 * node.val + 1);
      node.left.val = 2 * node.val + 1;
      helper(node.left);
    }

    if (node.right) {
      set.add(2 * node.val + 2);
      node.right.val = 2 * node.val + 2;
      helper(node.right);
    }
  };

  helper(root);
  this.set = set;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
