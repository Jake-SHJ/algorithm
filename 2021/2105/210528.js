// Student Attendance Record I

// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day.
// The record only contains the following three characters:
// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:
// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Example:
// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

// 주어진 문자열에서 해당 조건(결석 2회 미만, 연속 3회 지각이 없는 학생)에 맞는지 반환하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let lateCount = 0;
  let absentCount = 0;
  let lateCountArr = [];

  for (let i = 0; i < s.length; i++) {
    // 결석 카운트
    if (s[i] === "A") {
      absentCount += 1;
    }

    // 지각일 때
    if (s[i] === "L") {
      if (lateCount === 0) {
        // 지각 시작 카운트
        lateCount += 1;
      } else if (lateCount !== 0 && s[i - 1] === "L") {
        // 시작 카운트가 아니면서, 이전 기록이 지각일 때
        lateCount += 1;
      } else {
        // 시작 카운트가 아니면서, 이전 기록이 지각이 아닌 경우
        lateCountArr.push(lateCount);
        lateCount = 1;
      }
    }
  }

  // 순회가 끝났는데 지각 카운트가 배열에 들어가지 않은 경우 예외 처리
  if (lateCount !== 0) {
    lateCountArr.push(lateCount);
    lateCount = 0;
  }

  // 지각 연속 3회 이상 카운트
  const lateCountCondition = lateCountArr.filter((count) => {
    return count >= 3;
  });

  // 결석 2회 미만, 지각 연속 3회 이상 카운트가 0인 경우 true 반환
  return absentCount < 2 && lateCountCondition.length === 0;
};
