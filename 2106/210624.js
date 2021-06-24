// Convert Integer to the Sum of Two No-Zero Integers

// Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.
// Return a list of two integers [A, B] where:
// A and B are No-Zero integers.
// A + B = n
// It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

// Example:
// Input: n = 2
// Output: [1,1]
// Explanation: A = 1, B = 1. A + B = n and both A and B don't contain any 0 in their decimal representation.

// 주어진 숫자를 두 숫자의 합으로 분리할 때, 두 숫자가 0을 포함하지 않는 경우를 반환하는 문제

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  let result = [];

  for (let i = 1; i < n; i++) {
    if (!(n - i).toString().includes("0") && !i.toString().includes("0")) {
      result.push(i, n - i);
      break;
    } else {
      continue;
    }
  }

  return result;
};

// 처음엔 문제를 잘못이해해서, if문 조건을 (n - i) % 10 !== 0 이라고 했다가 10진수 문제가 아니라
// 그냥 0을 포함하면 안되는 것을 알게 됨
// 그래서 그 다음엔 !(n - i).toString().includes("0") 의 조건만 넣었는데, 두 숫자 모두 0을 가지면 안되는 것을 깨달음..
// 그래서 나온 답안이 상기 답안
