// Mean of Array After Removing Some Elements

// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.
// Answers within 10-5 of the actual answer will be considered accepted.

// Example:
// Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
// Output: 2.00000
// Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

// 주어진 배열에서 상위, 하위 5%를 제외한 나머지 수의 평균을 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  return (
    arr
      .sort((a, b) => a - b)
      .slice(arr.length * 0.05, arr.length - arr.length * 0.05)
      .reduce((acc, cur) => acc + cur) /
    (arr.length - arr.length * 0.1)
  );
};
// 오름차순 정렬 > 상,하위 5% 제외 > 합계 산출 > 평균 산출
