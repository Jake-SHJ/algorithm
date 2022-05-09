// Incremental Memory Leak

// You are given two integers memory1 and memory2 representing the available memory in bits on two memory sticks. 
// There is currently a faulty program running that consumes an increasing amount of memory every second.
// At the ith second (starting from 1), i bits of memory are allocated to the stick with more available memory 
// (or from the first memory stick if both have the same available memory). 
// If neither stick has at least i bits of available memory, the program crashes.
// Return an array containing [crashTime, memory1crash, memory2crash], where crashTime is the time (in seconds) 
// when the program crashed and memory1crash and memory2crash are the available bits of memory in the first and second sticks respectively.

// Example:
// Input: memory1 = 2, memory2 = 2
// Output: [3,1,0]
// Explanation: The memory is allocated as follows:
// - At the 1st second, 1 bit of memory is allocated to stick 1. The first stick now has 1 bit of available memory.
// - At the 2nd second, 2 bits of memory are allocated to stick 2. The second stick now has 0 bits of available memory.
// - At the 3rd second, the program crashes. The sticks have 1 and 0 bits available respectively.

// 주어진 메모리 2개를 큰 용량부터 순차적으로 차감했을 때, crash가 발생한 순차와 남은 메모리를 반환하는 문제

/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {
  let count = 0;
  // 사용될 메모리를 뺀 값이 0 이상일 경우만 계산
  while (memory1 - (count + 1) >= 0 || memory2 - (count + 1) >= 0) {
      count++;
      if (memory1 >= memory2) {
          memory1 -= count;
      } else {
          memory2 -= count;
      }
  }
  return [count + 1, memory1, memory2];
};
