// Largest Perimeter Triangle

// Given an integer array nums,
// return the largest perimeter of a triangle with a non-zero area,
// formed from three of these lengths.
// If it is impossible to form any triangle of a non-zero area, return 0.

// Example:
// Input: nums = [2,1,2]
// Output: 5

// 주어진 배열의 숫자를 한 변의 길이로 하는 삼각형을 만들 때, 그 넓이가 0이 아닌 가장 큰 삼각형의 둘레를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  // 내림차순 정렬
  const sortedNums = nums.sort((a, b) => b - a);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    // 넓이가 0이 되는 경우는 통과
    if (sortedNums[i] >= sortedNums[i + 1] + sortedNums[i + 2]) {
      continue;
    }
    // 아닌 경우 답으로 반환
    return [sortedNums[i], sortedNums[i + 1], sortedNums[i + 2]].reduce(
      (acc, cur) => acc + cur,
      0
    );
  }
  // 전부 넓이가 0이라서 0 반환
  return 0;
};
