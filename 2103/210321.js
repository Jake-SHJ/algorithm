// Count Number of Teams

// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

// Example:
// Input: rating = [2,5,3,4,1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const length = rating.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    const first = rating[i];
    for (let j = i + 1; j < length; j++) {
      const second = rating[j];
      if (first > second) {
        for (let k = j + 1; k < length; k++) {
          const third = rating[k];
          second > third ? result.push([first, second, third]) : null;
        }
      } else {
        for (let k = j + 1; k < length; k++) {
          const third = rating[k];
          second < third ? result.push([first, second, third]) : null;
        }
      }
    }
  }
  return result.length;
};

// 주어진 배열에서 index가 i < j < k 이면서 배열 요소가 오름차순 또는 내림차순으로 되는 경우를 구하는 문제
// 첫번째 시도는 세번째 중첩 for에서 등록하지도 않을 요소를 다른 중첩 for안에 변수로 저장하고, 굳이 요소를 배열안에 저장해서 runtime을 초과하여 실패하였다.

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const length = rating.length;
  let result = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        if (
          (rating[i] > rating[j] && rating[j] > rating[k]) ||
          (rating[i] < rating[j] && rating[j] < rating[k])
        ) {
          result += 1;
        }
      }
    }
  }
  return result;
};

// 두번째 시도는 배열이 아닌 카운터를 두고 3번째 중첩 for에서 해당하는 경우만 카운터를 올려서 저장되는 요소를 최소화하였다.
// 다행히 통과하고 메모리 효율이 좋게 나왔으나, 연산 속도는 3중첩 for문이라 그런지 느렸다.
// discuss를 참고해봤지만 극적으로 효율이 증가하는 경우는 거의 없었다.
