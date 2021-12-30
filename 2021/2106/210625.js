// Min Cost Climbing Stairs

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
// Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Example:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: Cheapest is: start on cost[1], pay that cost, and go to the top.

// 주어진 배열에서 최소의 비용으로 인덱스를 건너뛸수 있는 비용을 반환하는 문제

/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  // 두 가지의 스타팅 포인트 (계단은 1칸 또는 2칸을 오를 수 있으므로)
  let min1 = cost[0],
    min2 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    // 둘 중 작은 값에 다음 비용을 더하고
    let temp = Math.min(min1, min2) + cost[i];
    // min1, 2을 다음 스텝으로 조정
    min1 = min2;
    min2 = temp;
  }
  // 계속 해서 둘 중 작은 값에 더해나가면 마지막에 둘 중 하나는 최소 비용

  return Math.min(min1, min2);
};
// 풀다보니 조건이 많아지고 이슈가 발생하여 discuss 참고, 두 변수에 더하면서 스텝을 이동시키는 점에서 매우 기발하다고 생각..
