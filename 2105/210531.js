// Summary Ranges

// You are given a sorted unique integer array nums.
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
// That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

// Example:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// 주어진 배열에서 연속된 숫자는 정의된 형식으로 반환하는 문제

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const arrs = [];
  let tmp = [];

  for (let i = 0; i < nums.length; i++) {
    if (tmp.length === 0) {
      //  tmp가 비어있는 경우
      tmp.push(nums[i]);
    } else {
      if (tmp[tmp.length - 1] === nums[i] - 1) {
        // tmp가 있고, 순서가 맞는 경우
        tmp.push(nums[i]);
      } else {
        // tmp는 있지만, 순서가 아닌 경우
        arrs.push(tmp);
        tmp = [nums[i]];
      }
    }
    // 마지막 tmp를 arrs에 추가
    i === nums.length - 1 && tmp.length !== 0 ? arrs.push(tmp) : null;
  }

  const result = arrs.map((arr) => {
    if (arr.length === 1) {
      // 숫자가 단일로 존재하는 경우, 문자열로 반환
      return arr[0].toString();
    } else {
      // 숫자가 범위로 존재하는 경우, 정해진 형식으로 반환
      return [arr[0], arr[arr.length - 1]].join("->");
    }
  });

  return result;
};
