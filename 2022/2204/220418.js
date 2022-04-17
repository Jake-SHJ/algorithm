// Finding the Users Active Minutes

// You are given the logs for users' actions on LeetCode, and an integer k.
// The logs are represented by a 2D integer array logs where each logs[i] = [IDi, timei] indicates that the user with IDi performed an action at the minute timei.
// Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.
// The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode.
// A minute can only be counted once, even if multiple actions occur during it.
// You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k), answer[j] is the number of users whose UAM equals j.
// Return the array answer as described above.

// Example:
// Input: logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5
// Output: [0,2,0,0,0]
// Explanation:
// The user with ID=0 performed actions at minutes 5, 2, and 5 again. Hence, they have a UAM of 2 (minute 5 is only counted once).
// The user with ID=1 performed actions at minutes 2 and 3. Hence, they have a UAM of 2.
// Since both users have a UAM of 2, answer[2] is 2, and the remaining answer[j] values are 0.

// 주어진 이차원 배열을 통해 총 사용 시간별 유저의 수를 나타내는 배열을 반환하는 문제

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const map = new Map();
  const result = new Array(k).fill(0);
  // Map을 이용한 key, value mapping / value는 중복 방지를 위해 Set
  for (let i = 0; i < logs.length; i++) {
    if (map.get(logs[i][0])) {
      map.set(logs[i][0], map.get(logs[i][0]).add(logs[i][1]));
    } else {
      map.set(logs[i][0], new Set([logs[i][1]]));
    }
  }
  // key = user, value의 크기 = 총 사용시간
  // result는 1-indexed이므로 value.size - 1
  for (const value of map.values()) {
    result[value.size - 1] += 1;
  }
  return result;
};
