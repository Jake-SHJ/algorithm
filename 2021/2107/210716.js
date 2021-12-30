// Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
// Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// stones 문자열의 문자 중 jewels 문자열에 속하는 문자의 개수를 반환하는 문제

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;

  for (const stone of stones) {
    jewels.includes(stone) ? (result += 1) : null;
  }

  return result;
};

// result를 따로 두고 순회를 돌리는 방법

var numJewelsInStones = function (jewels, stones) {
  return stones.split("").filter((stone) => jewels.includes(stone)).length;
};

// 함수형으로 처리하는 방법
// 속도만 더 빨라지고 메모리는 차이가 거의 안남
