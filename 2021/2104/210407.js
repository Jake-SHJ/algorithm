// Bulb Switcher IV

// There is a room with n bulbs, numbered from 0 to n-1, arranged in a row from left to right. Initially all the bulbs are turned off.
// Your task is to obtain the configuration represented by target where target[i] is '1' if the i-th bulb is turned on and is '0' if it is turned off.
// You have a switch to flip the state of the bulb, a flip operation is defined as follows:
//  - Choose any bulb (index i) of your current configuration.
//  - Flip each bulb from index i to n-1.
// When any bulb is flipped it means that if it is 0 it changes to 1 and if it is 1 it changes to 0.
// Return the minimum number of flips required to form target.

// Example:
// Input: target = "10111"
// Output: 3
// Explanation: Initial configuration "00000".
// flip from the third bulb:  "00000" -> "00111"
// flip from the first bulb:  "00111" -> "11000"
// flip from the second bulb:  "11000" -> "10111"
// We need at least 3 flip operations to form target.

// 주어진 타겟의 형태로 주어진 조건에 따라 0과 1을 flip시키는 문제

/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let result = target[0] === "0" ? 0 : 1;
  target.split("").map((bulb, index, bulbs) => {
    if (index !== 0 && bulb !== bulbs[index - 1]) {
      result += 1;
    }
  });
  return result;
};
// 첫시도는 처음에 타겟이 스트링인데 숫자 0 이거나, 아닌 경우로 해서 실패했음
// 위 시도는 두번째이며 타겟을 스트링 "0"으로만 수정하여 통과
// 하지만 타겟을 배열로 바꾸고, 순회를 도는 과정에서 속도와 메모리 소모가 있는 것으로 유추

var minFlips = function (target) {
  let result = target[0] === "0" ? 0 : 1;
  for (let i = 0; i < target.length; i++) {
    if (i !== 0 && target[i] !== target[i - 1]) result += 1;
  }
  return result;
};
// 스트링을 바로 순회하도록 수정하니, 속도, 메모리 측면에서 크게 향상됨을 확인하였다.
