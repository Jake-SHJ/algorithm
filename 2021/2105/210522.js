// Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// 주어진 배열에서 0을 후순위로 보낸 배열을 만드는 문제 (반환하지 않음, 즉, 배열 자체를 변경할 것)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZero = [];
  // 0이 아닌 값을 찾는다.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nonZero.push(nums[i]);
    }
  }

  // 0이 아닌 값은 값을 변경하고, 나머지는 0으로 처리한다.
  for (let j = 0; j < nums.length; j++) {
    if (nonZero[j]) {
      nums[j] = nonZero[j];
    } else {
      nums[j] = 0;
    }
  }
};

// 반복문을 2개를 사용하였음에도 불구, 속도, 메모리 측면에서 90% 이상의 효율을 나타냄
