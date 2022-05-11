// Create Binary Tree From Descriptions

// You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that 
// parenti is the parent of childi in a binary tree of unique values. 
// Furthermore,
//  - If isLefti == 1, then childi is the left child of parenti.
//  - If isLefti == 0, then childi is the right child of parenti.
// Construct the binary tree described by descriptions and return its root.
// The test cases will be generated such that the binary tree is valid.

// Example:
// Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
// Output: [50,20,80,15,17,19]
// Explanation: The root node is the node with value 50 since it has no parent.
// The resulting binary tree is shown in the diagram.

// 주어진 이차원 배열을 통해 TreeNode를 반환하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const childOf = (parentVal, isLeft, map) => {
  // k, v로 child 추적
  const childVal = map.get(`${parentVal},${isLeft}`);
  if (!childVal) return null;
  return new TreeNode(childVal, childOf(childVal, 1, map), childOf(childVal, 0, map));
}

var createBinaryTree = function(descriptions) {
  // 이차원 배열의 k,v 처리
  const map = descriptions.reduce((map, [parent, child, isLeft]) => 
                                 map.set(`${parent},${isLeft}`, child), new Map());
  // v만 따로 Set 처리
  const children = new Set([...map.values()]);
  // root 추적
  const [rootVal] = descriptions.find(([parent]) => !children.has(parent));
  return new TreeNode(rootVal, childOf(rootVal, 1, map), childOf(rootVal, 0, map));
};

// discuss 참조
