// Fair Candy Swap

// Alice and Bob have a different total number of candies.
// You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i]
// is the number of candies of the ith box of candy that Alice has and bobSizes[j]
// is the number of candies of the jth box of candy that Bob has.
// Since they are friends, they would like to exchange one candy box each so that after the exchange,
// they both have the same total amount of candy.
// The total amount of candy a person has is the sum of the number of candies in each box they have.
// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange,
// and answer[1] is the number of candies in the box that Bob must exchange.
// If there are multiple answers, you may return any one of them.
// It is guaranteed that at least one answer exists.

// Example:
// Input: aliceSizes = [1,1], bobSizes = [2,2]
// Output: [1,2]

// alice와 bob이 서로 같은 수의 캔디를 가지게 서로 교환해야 할 캔디 박스를 반환하는 문제

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceTotal = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const bobTotal = bobSizes.reduce((acc, cur) => acc + cur, 0);
  // 교환되야 할 캔디 수의 차
  const exchangeDiff = (aliceTotal - bobTotal) / 2;
  const result = [];

  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      // 캔디 수의 차가 맞으면 그대로 결과값에 추가
      if (
        exchangeDiff < 0 &&
        bobSizes[j] - aliceSizes[i] === Math.abs(exchangeDiff)
      ) {
        result.push(aliceSizes[i], bobSizes[j]);
      }

      if (
        exchangeDiff > 0 &&
        aliceSizes[i] - bobSizes[j] === Math.abs(exchangeDiff)
      ) {
        result.push(aliceSizes[i], bobSizes[j]);
      }
      // 결과값이 생기면 바로 반환
      if (result.length > 0) return result;
    }
  }
};
