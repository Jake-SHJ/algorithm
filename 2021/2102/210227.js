// Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
// return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const splitedFlowerbed = flowerbed.join("").split("1"); // 흩어진 0들을 묶음 처리
  let countAvailableFlower = 0;
  for (let i = 0; i < splitedFlowerbed.length; i++) {
    if (splitedFlowerbed.length === 1) {
      // 0으로만 이뤄진 경우의 계산
      countAvailableFlower += Math.ceil(splitedFlowerbed[i].length / 2);
    } else {
      if (
        (i === 0 && splitedFlowerbed[i].length > 1) ||
        (i === splitedFlowerbed.length - 1 && splitedFlowerbed[i].length > 1)
      ) {
        // 최초가 0이거나, 마지막이 0인 경우의 계산
        countAvailableFlower += Math.ceil(splitedFlowerbed[i].length / 2);
      } else if (splitedFlowerbed[i].length >= 1) {
        // 1 사이에 껴있는 0의 계산
        countAvailableFlower += Math.floor(
          (splitedFlowerbed[i].length - 1) / 2
        );
      }
    }
  }
  if (n > countAvailableFlower) return false;
  if (n <= countAvailableFlower) return true;
};

// 분기처리가 제대로 되지 않아 제법 난항을 겪었으나 분기처리만 잘 했으면 어렵지 않은 문제
// 연산 속도는 80% 대로 빠른 편이었지만 메모리 측면에서는 효율이 좋지 못함 (왜 매번 넣어볼때마다 수치가 달라지는지 의문)
