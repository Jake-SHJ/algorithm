// Deepest Leaves Sum

// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Example:
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

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
var deepestLeavesSum = function (root) {
  let resultMap = new Map();

  const treeCycle = (node, depth) => {
    if (node.left !== null && node.right !== null) {
      treeCycle(node.left, depth + 1);
      treeCycle(node.right, depth + 1);
    } else if (node.left !== null && node.right === null) {
      treeCycle(node.left, depth + 1);
    } else if (node.left === null && node.right !== null) {
      treeCycle(node.right, depth + 1);
    } else {
      resultMap.get(depth)
        ? resultMap.set(depth, resultMap.get(depth) + node.val)
        : resultMap.set(depth, node.val);
    }
  };

  treeCycle(root, 0);

  return resultMap.get(Math.max(...resultMap.keys()));
};

// 처음엔 depth 명시 없이 진행했는데 depth 관계 없이 모든 트리 마지막 node들이 들어와서 원하는 결과를 얻지 못했다.
// 그래서 depth를 추가하고 이를 Map 자료 구조 형식에 밀어넣는 방법을 선택
// key가 depth이므로 key중 가장 큰 값의 결과를 반환하면 완료
// 어제 이진 트리 구조를 한 번 접해서 그런지 푸는데 시간이 그렇게 오래 걸리지 않았다.

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let resultMap = new Map();

  const treeCycle = (node, depth) => {
    if (!node) return;
    if (node.left !== null || node.right !== null) {
      treeCycle(node.left, depth + 1);
      treeCycle(node.right, depth + 1);
    } else {
      resultMap.get(depth)
        ? resultMap.set(depth, resultMap.get(depth) + node.val)
        : resultMap.set(depth, node.val);
    }
  };

  treeCycle(root, 0);

  return resultMap.get(Math.max(...resultMap.keys()));
};

// 다음과 같이 로직을 줄일 수도 있었지만, 오히려 속도가 안나오더라는..
