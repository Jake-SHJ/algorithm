// Construct Binary Tree from Preorder and Postorder Traversal

// Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values
// and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.
// If there exist multiple answers, you can return any of them.

// Example:
// Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]

// 주어진 두 배열을 통해 이진 트리를 생성하여 반환하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  let i = 0;

  const callDFS = (arr) => {
    if (!arr.length) return null;
    const node = pre[i++];
    const idx = arr.indexOf(pre[i]);
    const tree = new TreeNode(node);
    tree.left = callDFS(arr.slice(0, idx + 1));
    tree.right = callDFS(arr.slice(idx + 1, arr.indexOf(node)));
    return tree;
  };

  return callDFS(post);
};

// discuss 참조

// 예제의 node, idx, arr.slice(0, idx + 1), arr.slice(idx + 1, arr.indexOf(node))를
// 콘솔로 찍어보면 다음과 같다.
// node: 1, idx: 2
// [ 4, 5, 2 ]
// [ 6, 7, 3 ]
// node: 2, idx: 0
// [ 4 ]
// [ 5 ]
// node: 4, idx: -1
// []
// []
// node: 5, idx: -1
// []
// []
// node: 3, idx: 0
// [ 6 ]
// [ 7 ]
// node: 6, idx: -1
// []
// []
// node: 7, idx: -1
// []
// []
// pre를 통해 순차적으로 진행하고, 자식 노드는 post를 통해 체크해 나가는 것을 볼 수 있음
