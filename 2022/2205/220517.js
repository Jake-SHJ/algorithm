// Egg Drop With 2 Eggs and N Floors

// You are given two identical eggs and you have access to a building with n floors labeled from 1 to n.
// You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, 
// and any egg dropped at or below floor f will not break.
// In each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). 
// If the egg breaks, you can no longer use it. 
// However, if the egg does not break, you may reuse it in future moves.
// Return the minimum number of moves that you need to determine with certainty what the value of f is.

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: We can drop the first egg from floor 1 and the second egg from floor 2.
// If the first egg breaks, we know that f = 0.
// If the second egg breaks but the first egg didn't, we know that f = 1.
// Otherwise, if both eggs survive, we know that f = 2.

// Example 2:
// Input: n = 100
// Output: 14
// Explanation: One optimal strategy is:
// - Drop the 1st egg at floor 9. If it breaks, we know f is between 0 and 8. 
// Drop the 2nd egg starting from floor 1 and going up one at a time to find f within 8 more drops. 
// Total drops is 1 + 8 = 9.
// - If the 1st egg does not break, drop the 1st egg again at floor 22. 
// If it breaks, we know f is between 9 and 21. 
// Drop the 2nd egg starting from floor 10 and going up one at a time to find f within 12 more drops. 
// Total drops is 2 + 12 = 14.
// - If the 1st egg does not break again, follow a similar process dropping the 1st egg from floors 
// 34, 45, 55, 64, 72, 79, 85, 90, 94, 97, 99, and 100.
// Regardless of the outcome, it takes at most 14 drops to determine f.

// 주어진 층수에서 알이 깨지지 않는 높이 f를 찾는 최단 움직임을 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
  let i = 1;

  while (n > i) {
      n -= i;
      i++;
  }

  return i;
};

// 사실상 예제 2번을 역산해서 구한 것..모든 횟수가 비슷할 때 가장 적은 횟수가 나옴
// 따라서 층을 올라간 횟수만큼 빼나가면 i가 마지막엔 최소의 총 움직임이 반환됨
