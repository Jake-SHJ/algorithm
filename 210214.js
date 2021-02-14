// Water Bottles

// Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
// The operation of drinking a full water bottle turns it into an empty bottle.
// Return the maximum number of water bottles you can drink.

// Example:
// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var calculateDrinkableBottles = function (drinkedBottles, bottles, exchange) {
  const exchangedBottles = parseInt(bottles / exchange);
  const remaindedBottles = bottles % exchange;
  const restBottles = exchangedBottles + remaindedBottles;
  drinkedBottles += exchangedBottles;
  if (restBottles - exchange >= 0) {
    return calculateDrinkableBottles(drinkedBottles, restBottles, exchange);
  } else {
    return drinkedBottles;
  }
};

var numWaterBottles = function (numBottles, numExchange) {
  return calculateDrinkableBottles(numBottles, numBottles, numExchange);
};

// 재귀 함수로 풀었는데, 연산 속도는 중간 정도인데 메모리가 하위 수준이었음...
