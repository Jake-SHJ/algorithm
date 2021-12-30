// Self Dividing Numbers

// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

// Example:
// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

// 주어진 시작부터 끝까지의 숫자 중 스스로의 자릿수로 나눠지는 숫자들을 반환하는 문제

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let result = [];

  for (let i = left; i < right + 1; i++) {
    let count = 0;
    const splitedNum = i.toString().split("");
    splitedNum.map((digit) => {
      i % digit === 0 ? (count += 1) : null;
    });
    count === splitedNum.length ? result.push(i) : null;
  }

  return result;
};
