// Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

// Example:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// 주어진 배열의 요소를 제곱하여 오름차순으로 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    return nums.map(num => num ** 2).sort((a, b) => a - b);
};