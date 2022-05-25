// Smallest Subtree with all the Deepest Nodes

// Given the root of a binary tree, the depth of each node is the shortest distance to the root.
// Return the smallest subtree such that it contains all the deepest nodes in the original tree.
// A node is called the deepest if it has the largest depth possible among any node in the entire tree.
// The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

// Example:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4]
// Output: [2,7,4]
// Explanation: We return the node with value 2, colored in yellow in the diagram.
// The nodes coloured in blue are the deepest nodes of the tree.
// Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.

// 주어진 이진트리에서 가장 깊으면서, 가장 작은 subtree를 반환하는 문제

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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  const helper = (node) => {
    if (node === null) return [0, null];
    let [leftHeight, leftSubtree] = helper(node.left);
    let [rightHeight, rightSubtree] = helper(node.right);
    // 깊이가 같은 경우
    if (leftHeight === rightHeight) return [leftHeight + 1, node];
    // 깊이가 다른 경우
    if (leftHeight > rightHeight) {
      return [leftHeight + 1, leftSubtree];
    } else {
      return [rightHeight + 1, rightSubtree];
    }
  }    

  return helper(root)[1];
};
// discuss 참조, 갈수록 discuss 의존도가 높아지는 것 같음.
// 공부 방법의 변화가 필요한 시점...
