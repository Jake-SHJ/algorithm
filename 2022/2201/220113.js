// Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// 주어진 배열에서 1이 연속으로 가장 많이 나올 때의 개수를 반환하는 문제

var findMaxConsecutiveOnes = function (nums) {
  // 간단히 풀려면 이게 쉬움. 그러나 순회가 많아서 성능은 기대하기 어려움
  // const lengths = nums.join("").split("0").map((el) => el.length);
  // return Math.max(...lengths);

  let result = -Infinity;
  let tmp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] && i !== nums.length - 1) {
      tmp++;
      continue;
    }
    if (nums[i] && i === nums.length - 1) {
      tmp++;
    }
    result < tmp ? (result = tmp) : null;
    tmp = 0;
  }

  return result;
};
