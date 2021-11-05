// Crawler Log Folder

// The Leetcode file system keeps a log each time some user performs a change folder operation.
// The operations are described below:
// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
// The file system starts in the main folder, then the operations in logs are performed.
// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

// Example:
// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

// 주어진 폴더 경로 이동 배열을 따라 이동하였을 때 메인과의 폴더 깊이를 반환하는 문제

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let result = 0;

  for (const log of logs) {
    if (log === "./") {
      continue;
    }

    if (log === "../") {
      result === 0 ? null : (result -= 1);
      continue;
    }

    result += 1;
  }

  return result;
};
