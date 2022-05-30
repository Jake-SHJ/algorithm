// Minimum Number of Swaps to Make the String Balanced

// You are given a 0-indexed string s of even length n.
// The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.
// A string is called balanced if and only if:
//  - It is the empty string, or
//  - It can be written as AB, where both A and B are balanced strings, or
//  - It can be written as [C], where C is a balanced string.
// You may swap the brackets at any two indices any number of times.
// Return the minimum number of swaps to make s balanced.

// Example:
// Input: s = "][]["
// Output: 1
// Explanation: You can make the string balanced by swapping index 0 with index 3.
// The resulting string is "[[]]".

// 주어진 문자열에서 브라켓이 쌍이 맞도록 자리를 바꾸는 최소 횟수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let stk = [];

  for (const c of s) {
    if (stk && c === "]") stk.pop();
    else if (c === "[") stk.push(c);
  }

  return stk.length / 2;
};
// discuss 참조
