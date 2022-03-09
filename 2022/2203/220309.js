// Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

// Example:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// 주어진 배열에서 서로 이웃한 k갯수만큼의 요소의 평균이 가장 큰 값을 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // k 갯수만큼의 요소 합
  let sum = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  // 초기 평균 값
  let result = sum / k;

  for (let i = 0; i < nums.length - k; i++) {
    // 맨 앞 값 합에서 삭제, 뒤에 오는 값 추가
    sum = sum - nums[i] + nums[i + k];
    const avg = sum / k;
    // 평균 비교
    if (result < avg) result = avg;
  }

  return result;
};

// 처음엔 평균 계산식을 for문 안에서 돌렸더니 아무래도 reduce로 순회를 계속 돌아서
// 대량의 데이터의 경우 시간이 초과됨
// 따라서 초기 합을 먼저 구하고, 순회가 돌면서 맨앞값을 빼고 뒤에 값을 추가하는 방식으로 추가적인 순회를 제거해서 통과
