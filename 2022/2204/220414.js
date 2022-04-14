// Execution of All Suffix Instructions Staying in a Grid

// There is an n x n grid, with the top-left cell at (0, 0) and the bottom-right cell at (n - 1, n - 1).
// You are given the integer n and an integer array startPos where startPos = [startrow, startcol] indicates that a robot is initially at cell (startrow, startcol).
// You are also given a 0-indexed string s of length m where s[i] is the ith instruction for the robot: 'L' (move left), 'R' (move right), 'U' (move up), and 'D' (move down).
// The robot can begin executing from any ith instruction in s. It executes the instructions one by one towards the end of s but it stops if either of these conditions is met:
// The next instruction will move the robot off the grid.
// There are no more instructions left to execute.
// Return an array answer of length m where answer[i] is the number of instructions the robot can execute if the robot begins executing from the ith instruction in s.

// Example:
// Input: n = 3, startPos = [0,1], s = "RRDDLU"
// Output: [1,5,4,3,1,0]
// Explanation: Starting from startPos and beginning execution from the ith instruction:
// - 0th: "RRDDLU". Only one instruction "R" can be executed before it moves off the grid.
// - 1st:  "RDDLU". All five instructions can be executed while it stays in the grid and ends at (1, 1).
// - 2nd:   "DDLU". All four instructions can be executed while it stays in the grid and ends at (1, 0).
// - 3rd:    "DLU". All three instructions can be executed while it stays in the grid and ends at (0, 0).
// - 4th:     "LU". Only one instruction "L" can be executed before it moves off the grid.
// - 5th:      "U". If moving up, it would move off the grid.

// 주어진 움직일 수 있는 영역, 출발 지점, 움직이는 명령으로 각 명령으로부터 최대로 이동할 수 있는 횟수의 배열을 반환하는 문제

/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
// 명령에 따른 위치 반환
const executeMove = (moveStr, pos) => {
  switch (moveStr) {
    case "R":
      pos[1] += 1;
      return pos;
    case "L":
      pos[1] -= 1;
      return pos;
    case "U":
      pos[0] -= 1;
      return pos;
    case "D":
      pos[0] += 1;
      return pos;
  }
};

var executeInstructions = function (n, startPos, s) {
  // 최대 영역
  const MAX = n - 1;
  let result = [];

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    // 시작 위치 깊은 복사
    let tempPos = startPos.slice();
    // 최초 움직임 시작
    tempPos = executeMove(s[i], tempPos);
    // 이탈 시 0 push, 다음 명령으로 전환
    // 마지막인 경우, 1 push
    if (
      tempPos[0] > MAX ||
      tempPos[1] > MAX ||
      tempPos[0] < 0 ||
      tempPos[1] < 0
    ) {
      result.push(0);
      continue;
    } else if (i === s.length - 1) {
      result.push(1);
    }
    // 통과한 경우 다음 명령 실행
    for (let j = i + 1; j < s.length; j++) {
      // 명령 횟수 증가
      count++;
      // 다음 포지션 반환
      tempPos = executeMove(s[j], tempPos);

      // 이탈 시 for 문 종료
      if (
        tempPos[0] > MAX ||
        tempPos[1] > MAX ||
        tempPos[0] < 0 ||
        tempPos[1] < 0
      ) {
        result.push(count);
        break;
      }
      // 마지막인 경우, 최종 카운트 반환
      if (j === s.length - 1) {
        count++;
        result.push(count);
      }
    }
  }

  return result;
};
