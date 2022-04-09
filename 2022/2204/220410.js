// Find a Corresponding Node of a Binary Tree in a Clone of That Tree

// Given two binary trees original and cloned and given a reference to a node target in the original tree.
// The cloned tree is a copy of the original tree.
// Return a reference to the same node in the cloned tree.
// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

// Example:
// Input: tree = [7,4,3,null,null,6,19], target = 3
// Output: 3
// Explanation: In all examples the original and cloned trees are shown.
// The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

// 주어진 이진트리에서 타겟을 찾고 해당 타겟은 복제된 이진트리로부터 반환하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let answer;

  const helper = (o, c) => {
    if (o !== null) {
      helper(o.left, c.left);
      if (o === target) {
        answer = c;
      }
      helper(o.right, c.right);
    }
  };

  helper(original, cloned);

  return answer;
};
// 솔루션을 참고하긴 했는데, 몰라서 못푼게 아니라 뭔말인지 이해가 안되서 참고했음
// 그냥 이진트리 재귀로 타겟 찾는 문제임
