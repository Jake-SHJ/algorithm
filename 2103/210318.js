// Maximum Number of Coins You Can Get

// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins which you can have.

// Example:
// Input: piles = [2,4,1,2,7,8]
// Output: 9
// Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
// Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
// The maximum number of coins which you can have are: 7 + 2 = 9.
// On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let result = 0;
  const sortedPiles = piles.sort((a, b) => b - a);
  for (let i = 0; i < piles.length / 3; i++) {
    result += sortedPiles[i * 2 + 1];
  }
  return result;
};

// 3명이서 각 코인을 뽑을때 2번째 높은수만 뽑았을 경우 가장 큰 수를 구하는 문제
// 내림차순으로 배열을 두고, idx 1, 3, 5... 순으로 뽑는 횟수만큼 더하면 된다.

// 처음 접근은 result를 배열을 두고 마지막에 reduce 처리를 했으나 메모리 효율이 좋지 않음
// 따라서 result를 두고 값을 더해가는 방식으로 수정하니 속도, 메모리 측면 둘다 향상되는 결과를 얻었다.
