// Daily Temperatures

// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.
// If there is no future day for which this is possible, put 0 instead.
// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// 주어진 배열에서 현재 값보다 큰 값이 되는 수가 몇번째 뒤인지에 대한 배열을 반환하는 문제

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const result = [];

  for (let i = 0; i < T.length; i++) {
    let count = 0;
    for (let j = i + 1; j < T.length; j++) {
      count += 1;
      if (T[i] < T[j]) {
        break;
      } else {
        j === T.length - 1 ? (count = 0) : null;
        continue;
      }
    }
    result.push(count);
  }

  return result;
};

// 처음엔 else 문에서 배열 마지막까지 도달했을 때 count를 0으로 한다는 처리 조건을 넣지 않아서
// 더 큰 값이 나오진 않았는데 카운트 되어 실패하였음.

// 그 뒤로 count의 위치를 옮기는 방법을 시도했으나, 마지막까지 도달한 경우를 고려만 해주면 문제없다는 사실을 알게 됨
