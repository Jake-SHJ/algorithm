// Count Good Nodes in Binary Tree

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// 주어진 이진트리에서 해당 node가 패스 내에서 가장 큰 수거나 큰 수와 같은 경우를 찾는 문제

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
var goodNodes = function (root) {
  let result = 1;
  const treeCycle = (node) => {
    if (node.right && node.right.val >= node.val) result += 1;
    if (node.left && node.left.val >= node.val) result += 1;
    node.left && treeCycle(node.left);
    node.right && treeCycle(node.right);
  };
  treeCycle(root);
  return result;
};
// 처음엔 문제 파악이 잘 안되서 path 전체가 아닌 이전 node보다 크거나 같으면 무조건 갯수를 카운팅함

var goodNodes = function (root) {
  let result = 1;
  let maxValue = 0;
  const treeCycle = (node) => {
    if (node.val >= maxValue) maxValue = node.val;
    if (node.right && node.right.val >= maxValue) result += 1;
    if (node.left && node.left.val >= maxValue) result += 1;
    node.left && treeCycle(node.left);
    node.right && treeCycle(node.right);
  };
  treeCycle(root);
  return result;
};
// 두번째, maxValue를 도입했으나 각 path 별로 maxValue 값을 봐야하는데 공통 값으로 주는 바람에 제대로 된 답이 나오지 않음

var goodNodes = function (root) {
  let result = 1;
  const treeCycle = (node, maxValue) => {
    if (node.val >= maxValue) maxValue = node.val;
    if (node.right && node.right.val >= maxValue) result += 1;
    if (node.left && node.left.val >= maxValue) result += 1;
    node.left && treeCycle(node.left, maxValue);
    node.right && treeCycle(node.right, maxValue);
  };
  treeCycle(root, root.val);
  return result;
};
// 통과된 답안, 각 maxValue를 재귀함수의 인자로 넣어서 각 path 별로 볼수 있도록 함
