// Pseudo-Palindromic Paths in a Binary Tree

// Given a binary tree where node values are digits from 1 to 9.
// A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.
// Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

// Example:
// Input: root = [2,3,1,3,1,null,1]
// Output: 2
// Explanation: The figure above represents the given binary tree.
// There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1].
// Among these paths only red path and green path are pseudo-palindromic paths since
// the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).

// 주어진 이진트리에서 전체 경로 중 회문을 만들 수 있는 모든 경로를 구하는 문제

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
var pseudoPalindromicPaths = function (root) {
  const allPaths = [];
  let result = 0;
  const findPath = (root, arr) => {
    arr.push(root.val);
    root.left && findPath(root.left, arr.slice());
    root.right && findPath(root.right, arr.slice());
    !root.left && !root.right && allPaths.push(arr);
  };
  findPath(root, []);

  const isPalindrom = (arr) => {
    let count = 0;
    let temp = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (temp.has(arr[i])) {
        temp.delete(arr[i]);
        count -= 1;
      } else {
        temp.set(arr[i], 1);
        count += 1;
      }
    }
    return count === 1 || count === 0 ? true : false;
  };
  allPaths.map((el) => {
    if (isPalindrom(el)) {
      result += 1;
    }
  });

  return result;
};

// 결과적으론 메모리 초과로 틀린 답안이다.
// 모든 패스를 findPath를 통해 구하고, 해당 패스들을 회문 확인 작업을 통해서 구한다.
// 순회가 많다보니 주어진 이진트리가 커지면 커질수록 효율이 급격하게 낮아진다.

const isPalindrom = (arr) => {
  let count = 0;
  let temp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (temp.has(arr[i])) {
      temp.delete(arr[i]);
      count -= 1;
    } else {
      temp.set(arr[i], 1);
      count += 1;
    }
  }
  return count === 1 || count === 0 ? true : false;
};
var pseudoPalindromicPaths = function (root) {
  let result = 0;
  const findPath = (root, arr) => {
    arr.push(root.val);
    root.left && findPath(root.left, arr.slice());
    root.right && findPath(root.right, arr.slice());
    !root.left && !root.right && isPalindrom(arr) ? (result += 1) : null;
  };
  findPath(root, []);
  return result;
};

// allPath를 안거치고 해봤지만 여전히 통과하지 못함

var pseudoPalindromicPaths = function (root) {
  let result = 0;
  const findPath = (root, arr) => {
    arr.indexOf(root.val) !== -1
      ? arr.splice(arr.indexOf(root.val), 1)
      : arr.push(root.val);
    root.left && findPath(root.left, arr.slice());
    root.right && findPath(root.right, arr.slice());
    !root.left && !root.right && (arr.length === 0 || arr.length === 1)
      ? (result += 1)
      : null;
  };
  findPath(root, []);
  return result;
};

// 리팩터링 끝에 통과한 답안, 그렇게 효율이 좋진 않음
// 처음과 다르게 Path를 찾을 때부터 회문 여부를 가리도록 로직을 통합, 최소한의 재귀만으로 풀도록 수정하였다.
