// Relative Ranks

// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
// The athletes are placed based on their scores, where the 1st place athlete has the highest score,
// the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example:
// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// 주어진 배열을 순서를 바꾸지 않고 순위를 매겨서 반환하는 문제

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sortedScore = score.slice(0).sort((a, b) => b - a);
  let result = [];

  for (let i = 0; i < score.length; i++) {
    const rank = sortedScore.indexOf(score[i]);

    switch (rank) {
      case 0:
        result.push("Gold Medal");
        break;
      case 1:
        result.push("Silver Medal");
        break;
      case 2:
        result.push("Bronze Medal");
        break;
      default:
        result.push((rank + 1).toString());
        break;
    }
  }

  return result;
};

// 스코어를 복사하여 순서대로 정렬한 배열을 두고 본 스코어를 기준으로 순회
// 본 스코어를 순서에서 찾아서 해당 인덱스에 따라 순위를 결과값에 push
