// Delete Nodes And Return Forest

// Given the root of a binary tree, each node in the tree has a distinct value.
// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
// Return the roots of the trees in the remaining forest. You may return the result in any order.

// Example:
// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]

// 주어진 이진트리에서 to_delete의 node를 삭제한 나머지 이진트리의 배열을 반환하는 문제

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const result = [];
  const treeCycle = (node, isRoot) => {
    if (!node) return null;
    const shouldDelete = to_delete.includes(node.val); // 처음엔 이걸 to_delete를 순회시키려고 했다.
    if (isRoot && !shouldDelete) result.push(node); // 현재값이 root고 지울 값이 없으면 result에 push(node 재귀의 결과가 올라간다)
    node.left = treeCycle(node.left, shouldDelete); // 지워진 값이 있으면 다음 노드가 root가 된다.
    node.right = treeCycle(node.right, shouldDelete);
    return shouldDelete ? null : node; // 지워져야 될 값은 null을 반환
  };
  treeCycle(root, true);
  return result;
};

// 못 풀어서 discuss를 참고했다. 아직도 이진트리가 익숙하지 못한듯..
