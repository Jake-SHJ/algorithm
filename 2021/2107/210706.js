// Decompress Run-Length Encoded List

// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
// For each such pair, there are freq elements with value val concatenated in a sublist.
// Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.

// Example:
// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// 주어진 배열에서 2개씩 쌍으로 첫번째는 빈도, 두번쨰는 나타낼 수의 형식에 맞도록 배열을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      continue;
    } else {
      for (let j = 0; j < nums[i - 1]; j++) {
        result.push(nums[i]);
      }
    }
  }

  return result;
};
// 홀수번째는 건너뛰고 짝수번째 일 때, 홀수번째의 수만큼 순회하여 짝수번째의 수를 결과값에 넣도록 함

var decompressRLElist = function (nums) {
  const result = [];

  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }

  return result;
};
// discuss에서 본 더 간략화된 방식인데, 배열을 생성하고 fill에서 순회하고 다시 펼치는 연산이라 속도는 오히려 더 느림
