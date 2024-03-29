// Shortest Distance to a Character

// Given a string s and a character c that occurs in s, 
// return an array of integers answer where answer.length == s.length and answer[i] is the distance 
// from index i to the closest occurrence of character c in s.
// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Example:
// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

// 주어진 배열에서 타겟 문자열과의 가장 가까운 거리차의 배열을 반환하는 문제

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const target = [];
    
  for (let i = 0; i < s.length; i++) {
    s[i] === c && target.push(i);
  }
    
  const result = [];
    
  for (let i = 0; i < s.length; i++) {
    let min = s.length ;
    for (let j = 0; j < target.length; j++) {
      min = Math.min(Math.abs(i-target[j]), min);
    }
    result.push(min);
  }  
  return result;
};