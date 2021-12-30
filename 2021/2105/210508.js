// Bulb Switcher III

// There is a room with n bulbs, numbered from 1 to n, arranged in a row from left to right.
// Initially, all the bulbs are turned off.
// At moment k (for k from 0 to n - 1), we turn on the light[k] bulb.
// A bulb change color to blue only if it is on and all the previous bulbs (to the left) are turned on too.
// Return the number of moments in which all turned on bulbs are blue.

// Example:
// Input: light = [2,1,3,5,4]
// Output: 3
// Explanation: All bulbs turned on, are blue at the moment 1, 2 and 4.

// 주어진 배열의 순서대로 전구에 불을 켰을 때, 현재 켜진 전체 불이 0부터 시작해서 연속적인 경우를 반환하는 문제

/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function (light) {
  let bulbs = Array.from(light, (index) => (index = 0));
  let result = 0;

  for (let i = 0; i < light.length; i++) {
    bulbs[light[i] - 1] = 1;

    for (let j = 0; j < bulbs.length; j++) {
      if (bulbs[j] === 1 && bulbs[j - 1] === 0) {
        break;
      } else if (j === bulbs.length - 1) {
        result += 1;
        break;
      } else {
        continue;
      }
    }
  }

  return result;
};
// 첫 시도,  bulb 배열을 만드는데 순회 1번, light 배열 순회하는데 1번, bulb 체크하는데 1번 총 3번의 순회를 거침
// 당연하게도 시간 초과

var numTimesAllBlue = function (light) {
  let bulbs = [];
  let result = 0;

  for (let i = 0; i < light.length; i++) {
    bulbs[light[i] - 1] = 1;
    !bulbs.includes(undefined) ? (result += 1) : null;
  }

  return result;
};
// 통과 답안, 빈 배열의 index를 채우고 내부에 empty item이 있는 경우 외에 result에 +1을 하였음
// 필요한 순회를 2회로 최소화 시킴(includes도 순회를 사용하므로)
