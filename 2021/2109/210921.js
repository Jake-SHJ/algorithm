// Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// 주어진 n 번째의 피보나치 수를 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
 const fN = [
    0, 1, 1, 2, 3, 
    5, 8, 13, 21, 34, 
    55, 89, 144, 233, 377, 
    610, 987, 1597, 2584, 4181, 
    6765, 10946, 17711, 28657, 46368,
    75025, 121393, 196418, 317811, 514229, 832040
];
var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    
    if (n === 1) {
        return 1;
    }
    
    return fN[n - 1] + fN[n - 2];
};
// 피보나치 수를 다 저장하는 방식, n의 최대수가 제한적이라 가능했음

/**
 * @param {number} n
 * @return {number}
 */
 const map = {
    0: 0,
    1: 1,
    2: 1
}
var fib = function(n) {
    for (let i = 3; i <= n; i++) {
       map[i] = map[i-2] + map[i-1];
    } 

    return map[n];
};
// 피보나치 수열을 찾아내는 방식, discuss 참조