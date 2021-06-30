// Kids With the Greatest Number of Candies

// Given the array candies and the integer extraCandies,
// where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.
// Notice that multiple kids can have the greatest number of candies.

// Example:
// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

// 주어진 배열에서 extraCandies를 더했을때 다른 값들 중 가장 큰 값보다 크거나 같은지의 여부를 반환하는 문제

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];

  for (const candy of candies) {
    candy + extraCandies >= Math.max(...candies)
      ? result.push(true)
      : result.push(false);
  }

  return result;
};

// Math.max(...candies)를 따로 변수로 빼보기도 했는데, 속도는 비슷하고 메모리는 변수로 빼지 않은게 덜 소모함

const kidsWithCandies = function (candies, extraCandies) {
  const greatest = Math.max(...candies);
  return candies.map((kid) => kid + extraCandies >= greatest);
};

// 그리고 discuss를 보니 대부분 map으로 순회하던데, 이 경우 map이 for보다 조금 빠른 결과를 보였음
