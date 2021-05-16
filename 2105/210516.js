// Count Odd Numbers in an Interval Range

// Given two non-negative integers low and high.
// Return the count of odd numbers between low and high (inclusive).

// Example:
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// 주어진 수의 범위에서 홀수의 갯수를 반환하는 문제

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if (low === high) {
    if (low % 2 === 0) {
      return 0;
    } else {
      return 1;
    }
  }

  let result = 0;

  for (let i = low; i < high + 1; i++) {
    if (i % 2 === 1) result += 1;
    continue;
  }

  return result;
};
// 첫시도, 아무생각없이 순회돌림, 메모리 효율은 좋았으나 속도는 최악, 그래도 통과는 됐음

var countOdds = function (low, high) {
  if (low === high) {
    if (low % 2 === 0) {
      return 0;
    } else {
      return 1;
    }
  }

  if ((low + high) % 2 !== 0) {
    return (high - low + 1) / 2;
  } else if (low % 2 !== 0) {
    return Math.ceil((high - low + 1) / 2);
  } else {
    console.log(high, low);
    return Math.floor((high - low + 1) / 2);
  }

  return result;
};
// 두번째, 규칙을 찾고 순회없이 반환, 속도는 조금 개선됐고, 메모리가 떨어짐

var countOdds = function (low, high) {
  let result = Math.round((high - low) / 2);

  return low % 2 === 1 && high % 2 === 1 ? result + 1 : result;
};
// discuss에서 본 아이디어로 두번째 규칙들을 최소화 시킴
// 속도, 메모리 양쪽 측면에서 우월한 성능
