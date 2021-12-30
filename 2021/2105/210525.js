// Distribute Coins in Binary Tree

// You are given the root of a binary tree with n nodes where each node in the tree has node.val coins.
// There are n coins in total throughout the whole tree.
// In one move, we may choose two adjacent nodes and move one coin from one node to another.
// A move may be from parent to child, or from child to parent.
// Return the minimum number of moves required to make every node have exactly one coin.

// Example:
// Input: root = [3,0,0]
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

// 주어진 이진 트리에서 코인을 동일하게 분배할려고 할 때 node간 움직여야하는 횟수를 구하는 문제

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
var distributeCoins = function (root) {
  let result = 0;

  const treeRecursion = (node) => {
    if (node === null) return 0;
    const left = treeRecursion(node.left); // 왼쪽 노드 재귀
    const right = treeRecursion(node.right); // 오른쪽 노드 재귀
    result += Math.abs(left) + Math.abs(right); // 각 방향별 절대값의 합
    return node.val + left + right - 1; // 재귀시 반환값
  };

  treeRecursion(root);
  return result;
};

// 예전에 풀다가 못 풀어서 넘어갔던 문제
// 여전히 못풀어서 solution 참고
// 재귀 연산에 대한 이해도를 좀 더 높여야 이해할 수 있을 것 같다...
