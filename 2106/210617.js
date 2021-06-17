// Happy Number

// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example:
// Input: n = 19
// Output: true
// Explanation:
// 1**2 + 9**2 = 82
// 8**2 + 2**2 = 68
// 6**2 + 8**2 = 100
// 1**2 + 0**2 + 0**2 = 1

// 주어진 조건에 따라 계산했을 때 최종 결과값이 1인지에 대한 여부를 반환하는 문제

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let result = false;

  const recursion = (num) => {
    const numArr = num
      .toString()
      .split("")
      .map((number) => {
        return (number *= number);
      });

    const numSum = numArr.reduce((acc, cur) => acc + cur);

    if (numSum !== 1) {
      recursion(numSum);
    } else {
      return (result = true);
    }
  };

  recursion(n);

  return result;
};

// 1이 답으로 나오면 문제가 없지만, 1이 안나오는 경우 재귀에서 나올 수 없음

var isHappy = function (n) {
  let result = n;
  let set = new Set();

  while (result != 1) {
    result = 0;
    while (n != 0) {
      result += (n % 10) ** 2;
      n = parseInt(n / 10);
    }
    if (set.has(result)) return false;
    set.add(result);
    n = result;
  }

  return true;
};

// discuss 참고, 한번 나왔던 값이 다시 나왔다는 건 재귀 안에 갇혔음을 의미, 계산 방법이 내가 푼 방식보다 간결

var isHappy = function (n) {
  let result = false;
  let set = new Set();

  const recursion = (num) => {
    const numArr = num
      .toString()
      .split("")
      .map((number) => {
        return (number *= number);
      });

    const numSum = numArr.reduce((acc, cur) => acc + cur);
    if (set.has(numSum)) return result;

    if (numSum !== 1) {
      set.add(numSum);
      recursion(numSum);
    } else {
      return (result = true);
    }
  };

  recursion(n);

  return result;
};

// 내가 풀었던 방식에 접목, 결과 도출 가능
