// Combination Sum III

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. 
// The list must not contain the same combination twice, 
// and the combinations may be returned in any order.

// Example:
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.

// k개의 숫자로 n을 만드는 경우의 수를 반환하는 문제

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [];

  const backtrack = (idx, sum, arr) => {
    // arr이 k개만큼 모였을때
    if (arr.length === k) {
      // 그 합이 n인 경우
      if (sum === n) res.push([...arr]);
      return;
    }
    // 조건 이탈
    if (idx > 9 || sum > n) return;
    
    arr.push(idx);
    // 백트래킹
    backtrack(idx + 1, sum + idx, arr);
    arr.pop();
    backtrack(idx + 1, sum, arr);
  } 

  backtrack(1, 0 , []);

  return res;
};
// discuss 참조
