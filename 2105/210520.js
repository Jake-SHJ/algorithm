// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// 주어진 배열에서 시간순으로 최저 ~ 최고점의 수익률을 반환하는 문제 (즉 저점이 인덱스 순으로 먼저 와야함)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0; // 지점이 2개 나타나지 않음
  let max = prices[0]; // 고점
  let min = [prices[0], 0]; // 저점
  let profits = []; // 수익률

  for (let i = 1; i < prices.length; i++) {
    // 저점보다 작고 맨 뒤에 있지 않으면, 저점의 값을 교체하고, max의 값을 저점값으로 초기화 (이전의 max값은 의미가 없어지므로)
    if (prices[i] < min[0] && i !== prices.length - 1) {
      min[0] = prices[i];
      min[1] = i;
      max = prices[i];
    }

    // 저점보다 인덱스상 크고, 고점보다 큰 경우
    if (i > min[1] && prices[i] > max) {
      max = prices[i];
    }

    // 고점 - 저점을 수익률로 저장
    profits.push(max - min[0]);
  }

  // 수익률 중 가장 큰 값 반환
  return Math.max(...profits);
};
