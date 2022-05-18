// Largest Combination With Bitwise AND Greater Than Zero

// The bitwise AND of an array nums is the bitwise AND of all integers in nums.
// For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1.
// Also, for nums = [7], the bitwise AND is 7.
// You are given an array of positive integers candidates. 
// Evaluate the bitwise AND of every combination of numbers of candidates. 
// Each number in candidates may only be used once in each combination.
// Return the size of the largest combination of candidates with a bitwise AND greater than 0.

// Example:
// Input: candidates = [16,17,71,62,12,24,14]
// Output: 4
// Explanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.
// The size of the combination is 4.
// It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
// Note that more than one combination may have the largest size.
// For example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0.

// 주어진 배열에서 bitwise AND 연산으로 0보다 큰 수가 나오는 최대 갯수를 반환하는 문제

/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  const indexArr = new Array(24).fill(0);

  for (let candidate of candidates) {
    let idx = 0;
    while (candidate > 0) {
      if ((candidate & 1) === 1) indexArr[idx] += 1;
      candidate >>>= 1;
      idx++;
    }
  }

  return Math.max(...indexArr);
};

// discuss 참조, 여전히 bitwise는 어렵다..
// candidates의 숫자들을 & 1 연산을 통해 비트 자릿수마다 1인지 확인한 다음, 자릿수가 가장 많은 걸 반환
