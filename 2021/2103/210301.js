// Minimum Number of Operations to Move All Balls to Each Box

// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
// In one operation, you can move one ball from a box to an adjacent box.
// Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.
// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
// Each answer[i] is calculated considering the initial state of the boxes.

// Example:
// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let totalBalls = 0;
  const ballsArr = boxes.split("").map((el) => {
    if (el === "1") totalBalls++;
    return parseInt(el);
  });

  const result = ballsArr.map((ball, idx, arr) => {
    let moveCount = 0;
    let ballCount = ball;
    for (let i = 0; i < arr.length; i++) {
      if (ballCount === totalBalls) ++i;
      if (idx !== i && arr[i] === 1) {
        ballCount++;
        moveCount += Math.abs(idx - i);
      }
    }
    return moveCount;
  });

  return result;
};

// 쉽게 생각해서 모든 공을 한 지점에 모으기 위한 최소한의 이동 횟수를 지점마다 구하라는 문제
// 박스 자체가 string 으로 들어와서, split 시키고 순회를 돌면서 숫자로 변경 시킴, 이때 총 공의 개수를 미리 계산.
// 변환된 숫자 배열을 통해 각 지점별 움직임 카운트, 지금 지점에 있는 공의 갯수를 저장해두고 나와 같은 곳에 없는 공을 찾아 순회하여 인덱스 차이로 움직임 카운트 증가, 공 갯수 증가 시키고
// 공 갯수가 전체 공 갯수와 같아지면 순회를 빠르게 넘긴다.
// 최종 움직임 카운트를 배열로 반환하면 완료

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const ballsArr = boxes.split("").map((el) => {
    return parseInt(el);
  });

  const result = ballsArr.map((ball, idx, arr) => {
    let moveCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (idx !== i && arr[i] === 1) {
        moveCount += Math.abs(idx - i);
      }
    }
    return moveCount;
  });

  return result;
};

// 다시 생각해보니 총 공 갯수를 굳이 셀 필요가 없음
// 메모리 차이는 크게 안나고, 속도는 더 빨라지는 결과를 얻음
