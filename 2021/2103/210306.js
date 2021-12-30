// Sum of Nodes with Even-Valued Grandparent

// Given a binary tree, return the sum of values of nodes with even-valued grandparent.
// (A grandparent of a node is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

// Example:
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

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
var sumEvenGrandparent = function (root) {
  let result = [];

  const treeCycle = (node) => {
    if (node.val % 2 === 0) {
      result.push(
        node.left?.left?.val,
        node.left?.right?.val,
        node.right?.left?.val,
        node.right?.right?.val
      );
      node.left?.val ? treeCycle(node.left) : null;
      node.right?.val ? treeCycle(node.right) : null;
    } else {
      node.left?.val ? treeCycle(node.left) : null;
      node.right?.val ? treeCycle(node.right) : null;
    }
  };

  treeCycle(root);

  return result
    .filter((val) => val !== undefined)
    .reduce((acc, cur) => acc + cur, 0);
};

// grandParent Node가 짝수일 때, grandChild Node의 합을 구하는 문제
// 처음에 tree 순환을 어떻게 시켜야 하나에서 막혔으나 재귀 호출로 순환 해결
// optional chaning이 사용가능한 환경이어서 분기 처리
// result에 해당하는 grandChild Node를 전부 넣고, undefined된 요소 필터링 후 배열의 합 반환하여 해결

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
function sumEvenGrandparent(root) {
  let sum = [0];
  dfs(root, sum, null, null);
  return sum[0];
}

function dfs(root, sum, grandparent, parent) {
  if (grandparent?.val % 2 === 0) sum[0] += root.val;
  root.left && dfs(root.left, sum, parent, root);
  root.right && dfs(root.right, sum, parent, root);
}

// 다른 사람이 푼 DFS(Depth-Firtst Search) 방식
// 모르면 이렇게 접근 할 수도 없다..
