// Teemo Attacking

// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds.
// More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1].
// If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.
// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.
// Return the total number of seconds that Ashe is poisoned.

// Example:
// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

// 주어진 timeSeries에 독 공격을 하여 duration 동안 유지 될때, 총 독에 걸린 시간을 반환하는 문제

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let result = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    // 마지막은 무조건 duration만큼 지속, duration 더하고 반환
    if (i === timeSeries.length - 1) return (result += duration);
    // duration보다 timeSeries 간 시간이 짧으면 시간이 중첩 되므로, 그 차 시간만큼만 더해줌
    if (timeSeries[i + 1] - timeSeries[i] < duration) {
      result += timeSeries[i + 1] - timeSeries[i];
    } else {
      // 그외에는 duration만큼 독이 지속, duration만큼 더해줌
      result += duration;
    }
  }
};
