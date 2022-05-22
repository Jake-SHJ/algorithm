// Minimum Cost Tree From Leaf Values

// Given an array arr of positive integers, consider all binary trees such that:
//  - Each node has either 0 or 2 children;
//  - The values of arr correspond to the values of each leaf in an in-order traversal of the tree.
//  - The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree, respectively.
// Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.
// It is guaranteed this sum fits into a 32-bit integer.
// A node is a leaf if and only if it has zero children.

// Example:
// Input: arr = [6,2,4]
// Output: 32
// Explanation: There are two possible trees shown.
// The first has a non-leaf node sum 36, and the second has non-leaf node sum 32.

// 주어진 배열에서 조건대로 이진 트리를 만들었을 때, leaf가 아닌 값들의 최소합을 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let res = 0;

  while (arr.length !== 1) {
    let min = Number.MAX_SAFE_INTEGER;
    let cur = 0;
    // 순회하여 최소 곱 추출
    for (let i = 0; i < arr.length - 1; i++) {
      let prod = arr[i] * arr[i + 1];
      if (prod < min) {
        min = prod;
        cur = i;
      }
    }
    res += min;
    // 최소곱이 된 값 중 더 큰 값을 남김
    let maxInPair = Math.max(arr[cur], arr[cur + 1]);
    arr.splice(cur, 2, maxInPair);
  }

  return res;
};

// discuss 참조
