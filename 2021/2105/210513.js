// Path Sum

// Given the root of a binary tree and an integer targetSum,
// return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// Example:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// 주어진 이진트리에서 경로상의 노드의 합들 중 targetSum이 존재하는지 여부를 반환하는 문제

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let sums = [];

  const treeRecurse = (node, sum) => {
    if (node === null) return;

    sum += node.val;

    if (node.left) treeRecurse(node.left, sum);
    if (node.right) treeRecurse(node.right, sum);

    if (!node.left && !node.right) sums.push(sum);
  };

  treeRecurse(root, 0);

  return sums.includes(targetSum);
};

// 트리를 leaf까지 재귀로 순회한 다음 합을 배열에 넣고 비교하게 했음

var hasPathSum = function (root, targetSum) {
  let result = false;

  const treeRecurse = (node, sum) => {
    if (node === null) return;

    sum += node.val;

    if (node.left) treeRecurse(node.left, sum);
    if (node.right) treeRecurse(node.right, sum);

    if (!node.left && !node.right && sum === targetSum) result = true;
  };

  treeRecurse(root, 0);

  return result;
};
// include의 순회를 줄이기 위해 결과값을 바로 비교하도록 한후 result값을 변경하도록 하였음
// 근데 왜 메모리나 속도나 큰 차이가 없는거지? (속도는 빨라지는 변화가 생김, 메모리는 흠..)
