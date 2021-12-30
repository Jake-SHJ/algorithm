// Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

// Example:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// 주어진 숫자만큼의 배열에서 규칙에 따라 요소를 넣고 반환하는 문제

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = [];

  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
      continue;
    }

    if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    }
    result.push(String(i));
  }

  return result;
};

var fizzBuzz = function (n) {
  return new Array(n)
    .fill(0)
    .map((e, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};
// 한줄로 푸는 법도 있긴한데, 오히려 더 느림
