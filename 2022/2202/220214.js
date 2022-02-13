// Binary Prefix Divisible By 5

// You are given a binary array nums (0-indexed).
// We define xi as the number whose binary representation is the subarray nums[0..i]
// (from most-significant-bit to least-significant-bit).
// For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
// Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

// Example:
// Input: nums = [0,1,1]
// Output: [true,false,false]
// Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
// Only the first number is divisible by 5, so answer[0] is true.

// 주어진 배열의 이진수를 순차적으로 나열한 수가 5로 나누어지는 여부를 배열로 반환하는 문제

/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let cur = 0;

  return nums.map((bit) => {
    // bit가 하나 더 붙어서 자릿수가 앞으로 한칸씩 움직이면 해당 숫자는 2배만큼 커짐
    cur = cur * 2 + bit;
    cur %= 5;
    // 5로 나누었을 때 나머지가 0이면 true
    return cur === 0;
  });
};
// discuss 참조한 답

// 이건 시도했던 답
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    // 일단 순회 안에서 또 순회를 돌렸음.. 10진수를 너무 어렵게 구했다
    const decimal = parseInt(nums.slice(0, i + 1).join(""), 2);
    // 이렇게 할꺼였으면 차라리 map이 나았음(어차피 전체 순회가 필요한 로직이므로)
    decimal % 5 === 0 ? result.push(true) : result.push(false);
  }
  return result;
};
// 그래서 답은 맞은듯 했으나 실제로 돌려보니 자릿수가 많아지니 답이 아예 틀리게 나오는 경우가 생김
