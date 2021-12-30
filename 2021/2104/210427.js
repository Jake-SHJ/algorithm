// Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// 주어진 배열의 요소들이 가질 수 있는 모든 경우의 수의 배열을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums, set = [[]]) => {
  for (const n of nums) {
    for (const subset of [...set]) {
      set.push([...subset, n]);
    }
  }
  return set;
};

// 결론적으로 풀지 못했음, 빈 배열, 최종 배열 및 각 요소 1개씩 담은 배열은 순회로 해결했지만 2개, 3개씩 있는 배열을 생성할 방법을 생각하지 못함
// 위 답안은 discuss에서 참조했고, 아주 간단하게 풀어냈음
// 순회 방식은 다음과 같음

// n = 1
// set = [], [1]

// n = 2
// set = [], [1], [2], [1, 2]

// n = 3
// set = [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]

// 빈 배열부터 한 요소가 추가될 때마다 차곡차곡 쌓아올림.. 왜 이렇게 생각하지 못했을까.. 좀더 노력해야겠음
