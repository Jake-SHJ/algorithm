// Maximum Difference Between Node and Ancestor

// Given the root of a binary tree, find the maximum value V for which there exist different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.
// A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.

// Example:
// Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
// Output: 7
// Explanation: We have various ancestor-node differences, some of which are given below :
// |8 - 3| = 5
// |3 - 7| = 4
// |8 - 1| = 7
// |10 - 13| = 3
// Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

// 이진트리에서 서로 부모-자식관계인 노드들의 절대값 차가 가장 큰 수를 반환하는 문제

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
var maxAncestorDiff = function (root) {
  if (root === null) return 0;
  let result = 0;

  const findMaxDiff = (root, max, min) => {
    if (root === null) {
      result = Math.max(result, max - min);
      return;
    }

    max = Math.max(max, root.val);
    min = Math.min(min, root.val);

    findMaxDiff(root.left, max, min);
    findMaxDiff(root.right, max, min);
  };

  findMaxDiff(root, root.val, root.val);

  return result;
};

// 재귀까지 접근은 했으나, 모든 값들의 절대값을 일일히 구하려는 접근을 해서 실패
// 해당 답안은 discuss 참조
// 재귀를 통해 가장 큰 값과 작은 값을 찾고, 그 차를 결과로 반환
// 이진트리 문제가 가면 갈수록 어려운듯..
