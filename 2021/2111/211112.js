// Last Stone Weight

// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
// Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

// Example:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// 주어진 배열에서 가장 무거운 돌 2개를 부딪힌 결과를 반복했을때 마지막 남은 돌의 무게를 반환하는 문제

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // 1개 남을 때까지 반복
  while (stones.length > 1) {
    // 가장 무거운 걸 앞으로 정렬
    stones.sort((a, b) => b - a);
    // 2개 부딪힌 결과
    const newStone = stones[0] - stones[1];
    // 2개 사라지고 결과 값 추가
    stones.splice(0, 2, newStone);
  }

  return stones[0];
};
