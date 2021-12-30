// Insert into a Binary Search Tree

// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion.
// It is guaranteed that the new value does not exist in the original BST.
// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// Example:
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]

// 주어진 val를 BST에 집어넣는 문제

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root.val < val && root.right === null) {
    root.right = new TreeNode(val);
  }

  if (root.val > val && root.left === null) {
    root.left = new TreeNode(val);
  }

  if (root.val < val && root.right !== null) {
    insertIntoBST(root.right, val);
  }

  if (root.val > val && root.left !== null) {
    insertIntoBST(root.left, val);
  }

  return root;
};

// 첫시도, 근데 root를 빈 배열로 줄 줄은 몰랐다. 빈 배열이 오면 root.val이 없으므로 runtime error 가 발생한다.

var insertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val);
  }

  if (root.val < val && root.right === null) {
    root.right = new TreeNode(val);
  }

  if (root.val > val && root.left === null) {
    root.left = new TreeNode(val);
  }

  if (root.val < val && root.right !== null) {
    insertIntoBST(root.right, val);
  }

  if (root.val > val && root.left !== null) {
    insertIntoBST(root.left, val);
  }

  return root;
};

// 교정안. root가 없으면 그대로 treeNode를 추가한다.
// 하지만 불필요한 분기가 많은 것 같아서 다시 리팩터링

var insertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val);
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};

// 성능 상 차이는 없지만 코드가 확실히 짧아졌다.
