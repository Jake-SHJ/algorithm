// Remove Element

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.

// 주어진 배열에서 주어진 요소를 제거했을 때의 길이 값을 반환하면 주어진 배열에서 길이만큼 배열을 반환하는 문제
// 즉, 길이만큼 배열에서 요소를 반환하기 때문에 주어진 배열을 직접 조작하여 요소를 제거해 나가야함

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      result += 1;
    } else {
      nums.splice(i, 1);
      i--;
      continue;
    }
  }

  return result;
};

// 예시중에 반환된 배열의 순서가 이상한게 있어서 좀 헷갈렸으나 배열의 순서를 신경쓰진 않아도 됨
// 직접 배열을 조작하므로 배열에서 요소가 빠지면, length가 변해서 의도치 않은 답이 나올 수 있음
// 따라서, 요소를 제거할때 이전 인덱스부터 다시 타고 오게끔 하였음
