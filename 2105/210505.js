// Validate Stack Sequences

// Given two sequences pushed and popped with distinct values,
// return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

// Example:
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// 주어진 2개의 배열이 순차적으로 push와 pop을 했을 때 서로 가능한 경우인지를 판단하여 반환하는 문제

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;

  for (const num of pushed) {
    stack.push(num);
    while (
      stack &&
      i < popped.length &&
      stack[stack.length - 1] === popped[i]
    ) {
      stack.pop();
      i += 1;
    }
  }

  return i === popped.length;
};

// 풀이 실패, 솔루션 참조
// pushed를 스택에 쌓아올리면서 popped의 순서와 비교하여 가능한지 여부를 판단
// 스택의 마지막과 popped의 i 번째가 같은 경우, 스택에서 마지막 요소를 제거하고, i를 한칸씩 올려서 비교
