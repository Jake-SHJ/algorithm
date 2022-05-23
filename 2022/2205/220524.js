// Restore the Array From Adjacent Pairs

// There is an integer array nums that consists of n unique elements, but you have forgotten it. 
// However, you do remember every pair of adjacent elements in nums.
// You are given a 2D integer array adjacentPairs of size n - 1 
// where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.
// It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, 
// either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order.
// Return the original array nums. If there are multiple solutions, return any of them.

// Example:
// Input: adjacentPairs = [[2,1],[3,4],[3,2]]
// Output: [1,2,3,4]
// Explanation: This array has all its adjacent pairs in adjacentPairs.
// Notice that adjacentPairs[i] may not be in left-to-right order.

// 주어진 이차원 배열을 인접 숫자에 맞춰 하나의 배열로 반환하는 문제

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
  if (adjacentPairs.length === 1) return adjacentPairs[0];

  let map = new Map();
  let visited = new Set();
  let res = [];
  let cur = 0;

  // k,v mapping
  for (const [k, v] of adjacentPairs) {
    if (map.has(k)) {
        map.set(k, [...map.get(k), v]);
    } else {
        let arr = [v];
        map.set(k, arr);
    }

    if (map.has(v)) {
        map.set(v, [...map.get(v), k])
    } else {
        let arr = [k];
        map.set(v, arr);
    }
  }
  // 시작점 찾기
  for (const [k, v] of map.entries()) {
    if (v.length === 1) {
        cur = k;
        break;
    }
  }
  // 연결
  while (cur != null) {
    visited.add(cur);
    res.push(cur);
    const neis = map.get(cur);
    cur = null;

    for (const nei of neis) {
        if (!visited.has(nei)) {
            cur = nei;
        }
    }
  }
  return res;
};
// discuss 참조
