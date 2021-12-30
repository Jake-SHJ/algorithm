// Sum of Left Leaves

// Given the root of a binary tree, return the sum of all left leaves.

// Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// 주어진 이진트리에서 전체 left leaves에 대한 합을 반환하는 문제

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
var sumOfLeftLeaves = function (root) {
  let leftLeaves = [];

  const recurseTree = (node) => {
    if (node.left) {
      if (!node.left.left && !node.left.right) leftLeaves.push(node.left.val);
      recurseTree(node.left);
    }

    if (node.right) {
      recurseTree(node.right);
    }
  };

  recurseTree(root);

  return leftLeaves.length === 0
    ? 0
    : leftLeaves.reduce((acc, cur) => acc + cur);
};

// left leaves에 대한 정의가 명확하지 않으면 틀림
// 정의에서 따로 거론하고 있지 않지만
// 왼쪽 leave이지만 해당 leaves에는 자손이 존재하지 않아야 함, 즉 말단 leave 중 왼쪽에 존재하는 leave를 의미

// 처음엔 그냥 왼쪽에 있는 걸 다 더함, 당연히 오답
// 두번째는 왼쪽 자손만 없는 왼쪽 leave를 다 더함, 말단이 아닌 경우가 있으므로 (오른쪽 자손이 있는 경우) 오답
// 마지막으로 자손이 없는 leave 중 왼쪽만 더 함, 정답
